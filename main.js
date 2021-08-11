
function start(){
  WebARRocksFaceDebugHelper.init({
    spec: {
      GPUThermalThrottlingDetectionEnabled: true,
	  NNCPath: './src/neuralNets/',
    }, // keep default specs
    callbackReady: function(err, spec){

    },
    callbackTrack: function(detectState){
		console.log("detectState.s = " + detectState.s);
    }
  })
}

function main(){
  WebARRocksResizer.size_canvas({
    canvasId: 'WebARRocksFaceCanvas',
    callback: start
  })
}