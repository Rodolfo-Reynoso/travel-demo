var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("Hi");

});

gulp.task('html', function(){

	console.log("Blah blah");

});

gulp.task('styles', function(){
	console.log('Css changes mofo!');
});

gulp.task('watch', function(){

	watch('./app/index.html', function(){
		gulp.start('html');
	});


	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});
