export const helloRoute = {
    path: '/hello',
    method: 'get',
    handler: (req, res) => {
        res.send('hello from out');
    },
}