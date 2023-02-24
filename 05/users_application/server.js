const Koa = require('koa');
const Router = require('koa-router');
const User = require('./models/User');
const mongoose = require('mongoose');

const app = new Koa();

app.use(require('koa-bodyparser')());

const router = new Router({ prefix: '/users' });

async function handleValidationErrors(ctx, next) {
    try {
        await next();
    } catch (error) {
        if (error.name !== 'ValidationError') throw error;

        ctx.status = 400;
        ctx.body = Object.keys(error.errors).reduce((acc, val) => ({
            ...acc,
            [val]: error.errors[val].message
        }), {});
    }
}

function handleInvalidObjectId(ctx, next) {
    if (!mongoose.isValidObjectId(ctx.params.id)) {
        ctx.throw(404, 'user not found');
    }

    return next();
}

router.get('/:id', handleInvalidObjectId, async (ctx, next) => {
    const user = await User.findById(ctx.params.id);
    if (!user) {
        ctx.throw(404, 'user not found');
    }
    
    ctx.body = user;
});

router.put('/:id', handleInvalidObjectId, handleValidationErrors, async (ctx, next) => {    
    const user = await User.findByIdAndUpdate(
        ctx.params.id,
        {
            email: ctx.request.body.email,
            name: ctx.request.body.name,
        },
        {
            returnDocument: 'after',
            runValidators: true,
        }
    );

    ctx.body = user;
});

router.post('/', handleValidationErrors, async (ctx, next) => {
    const user = await User.create({
        email: ctx.request.body.email,
        name: ctx.request.body.name,
    });

    ctx.body = user;
});

app.use(router.routes());

module.exports = app;
