
exports.min = function min (array) {
  let mini = 1000;
  if(array == undefined){
	return 0;
  } else
  if (array.length == 0) {
	return 0;
  } else {
	for (let i = 0; i < array.length; i++) {
	  if (array[i] < mini) {
	    mini = array[i];
	  }
	}
	return mini;
  }
}

exports.max = function max (array) {
  let maxi = -1000;
  if(array == undefined){
	return 0;
  } else
  if (array.length == 0) {
	return 0;
  } else {
	for (let i = 0; i < array.length; i++) {
	  if (array[i] > maxi) {
	    maxi = array[i];
	  }
	}
	return maxi;
  }
}

exports.avg = function avg (array) {
 let avgs = 0;
 let sum = 0;
  if(array == undefined){
	return 0;
  } else
  if (array.length == 0) {
	return 0;
  } else {
	for (let i = 0; i < array.length; i++) {
	  sum = sum + array[i];
	}
	avgs = sum / array.length;
	return avgs;
  }
  //return 0;
}
