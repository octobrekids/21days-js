(() => {
    function setup() {
        const canvas = document.getElementById('falling-snow-canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        return{
            canvas,
            canvasContext: canvas.getContext('2d');
            numberOfSnowBalls: 250;
        }
    }
    function createSnowBalls(canvas, numberOfSnowBalls){
        const x = [...Array[numberOfSnowBalls]]
        console.log(x);

    }
    function run() {
        const {canvas, canvasContext, numberOfSnowBalls} = setup();
        createSnowBalls(canvas, numberOfSnowBalls);
    }
    run();
})();