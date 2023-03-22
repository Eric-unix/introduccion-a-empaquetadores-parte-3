import esbuildServe from 'esbuild-serve';

esbuildServe({
    entryPoints: ['src/index.tsx'],
    buundle: true,
    minify: true,
    sourcemap: true,
    outfile: 'dist/bundle.js',
    define:{
        'processs.env.NODE_ENV': '"development"',
        'process.env.DEBUG': 'false'
    }
},
{
    port: 3005,
    root: '.'
}
)