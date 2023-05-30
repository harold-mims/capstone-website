const { defineConfig } = require('vite')


module.exports = defineConfig({
    base: '/capstone-website/',
    assetsInclude: ['**/*.stl'],
    publicDir: 'public',
    build: {
        cssCodeSplit: false,
        rollupOptions: {
        input: {
            main: './index.html',
            final_prototype: './pages/final-prototype.html',
            hardware_approach: './pages/hardware-approach.html',
            software_approach: './pages/software-approach.html',
            sbd_fbd_approach: './pages/sbd-fbd-approach.html',
            specifications: './pages/specifications.html',
            threejstest: './pages/3jstest.html',

            full_assembly: './pages/3d-models/full_assembly.html',
            test: './pages/3d-models/test.html',

            display_stl: './src/display_stl.js',
            script: './src/script.js'
            // ...
            // List all files you want in your build
      }
    }
  }
})