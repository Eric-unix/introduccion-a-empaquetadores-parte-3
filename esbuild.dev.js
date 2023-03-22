requestAnimationFrame('esbuild').build({
    entryPoints: [src/indexedDB.tsx],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: 'dist/bundle.js'
}).catch(() => process.exit(1) );