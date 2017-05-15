function FZ(){
	this.a = 1;
}
FZ.prototype.fs = function(){
	console.log('================',this.a)
}

export default FZ;