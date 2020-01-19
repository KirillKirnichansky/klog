export default function(context) {
        console.log('checkauth');
        context.store.dispatch("initAuth", context.req);
} 