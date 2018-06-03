var loaded = 1;
var activado = false;
var theme = 0;

$(window).scroll(function () {
	if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height() && activado == true) {
		load();
	}
});

function load() {
	if (loaded < 3) {
		$("#loading").show();
		$.getJSON("https://rawgit.com/cuencaLZ/Trabajo-final-LLMM/master/data/" + loaded + ".json", function (jsonObject) {
			addrow(jsonObject);
			$("#loading").hide();
		});
		loaded++;
		if (loaded > 2) {
			$("#loadButton").html("No hay más noticias.");
		}
	}
};

function addrow(json) {
	$.each(json, function (i, item) {
		$("#loadedNews").append(
			'<article class="col-xs-12 col-sm-10 col-md-10">' +
			'<div class="añadir row">' +
			'<div class="fecha">' +
			'<div class="well well-sm">' +
			item.date +
			'</div>' +
			'<img src="' + item.imgMid + '" class="img-rounded Notimagen" id="' + item.imgId + '" data-toggle="modal" data-target="#newModal" alt="..."/>' +
			'</div>' +
			'<div class="descripcion">' +
			'<h3>' +
			item.title +
			'</h3>' +
			'<p>' +
			item.description +
			'</p>' +
			'<a href="news.html">' +
			'Leer mas...' +
			'</a>' +
			'</div>' +
			'</div>' +
			'</article>');
	})
};

$(document).ready(function () {

	$("#activado").tooltip();
	$("#desactivado").tooltip();
	$("#activado").hide();
	$("#loading").hide();

	$(".toggle").click(function () {
		if (activado == false) {
			$("#desactivado").hide();
			$("#activado").show();
			activado = true;
			$("#loadButton").hide();
		} else {
			$("#activado").hide();
			$("#desactivado").show();
			activado = false;
			$("#loadButton").show();
		}
	});


	$("#loadButton").click(function () { load(); });

	$("body").on("click", ".Notimagen", function () {
		var id = $(this).attr('id');
		$("#modalImg").attr("src", "img/imgbig" + id + ".jpg");
	});


});