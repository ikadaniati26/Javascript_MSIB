$(document).ready(function () {
  $("p").hide();
});

$(document).ready(function () {
  $(".btn1").click(function () {
    $("p").fadeIn();
  });

  $(".btn2").click(function () {
    $("p").fadeOut();
  });
});

//fungsi tombol
$(".btn").click(function () {
  $(".musik").html("<audio controls stop></audio>");
  $(".musik").hide();
});

function fungsi(hewan) {
  switch (hewan) {
    case "ayam":
      $("document").ready(function () {
        $("#musik_ayam").html('<audio controls autoplay> <source src="Audio/ayam.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_ayam").hide();
      });
      break;

    case "bebek":
      $("document").ready(function () {
        $("#musik_bebek").html('<audio controls autoplay> <source src="Audio/bebek.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_bebek").hide();
      });
      break;

    case "burung":
      $("document").ready(function () {
        $("#musik_burung").html('<audio controls autoplay> <source src="Audio/burung.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_burung").hide();
      });
      break;

    case "angsa":
      $("document").ready(function () {
        $("#musik_angsa").html('<audio controls autoplay> <source src="Audio/angsa.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_angsa").hide();
      });
      break;

    case "kalkun":
      $("document").ready(function () {
        $("#musik_kalkun").html('<audio controls autoplay> <source src="Audio/kalkun.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_kalkun").hide();
      });
      break;

    case "macan":
      $("document").ready(function () {
        $("#musik_macan").html('<audio controls autoplay> <source src="Audio/macan.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_serigala").hide();
      });
      break;

    case "serigala":
      $("document").ready(function () {
        $("#musik_serigala").html('<audio controls autoplay> <source src="Audio/serigala.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_serigala").hide();
      });
      break;

    case "singa":
      $("document").ready(function () {
        $("#musik_singa").html('<audio controls autoplay> <source src="Audio/singa.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_singa").hide();
      });
      break;

    case "anjing":
      $("document").ready(function () {
        $("#musik_anjing").html('<audio controls autoplay> <source src="Audio/anjing.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_anjing").hide();
      });
      break;

    case "gorila":
      $("document").ready(function () {
        $("#musik_gorila").html('<audio controls autoplay> <source src="Audio/gorila.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_gorila").hide();
      });
      break;

    case "sapi":
      $("document").ready(function () {
        $("#musik_sapi").html('<audio controls autoplay> <source src="Audio/sapi.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_sapi").hide();
      });
      break;

    case "kambing":
      $("document").ready(function () {
        $("#musik_kambing").html('<audio controls autoplay> <source src="Audio/kambing.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_kambing").hide();
      });
      break;

    case "lebah":
      $("document").ready(function () {
        $("#musik_lebah").html('<audio controls autoplay> <source src="Audio/lebah.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_lebah").hide();
      });
      break;

    case "kuda":
      $("document").ready(function () {
        $("#musik_kuda").html('<audio controls autoplay> <source src="Audio/kuda.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_kuda").hide();
      });
      break;

    case "kerbau":
      $("document").ready(function () {
        $("#musik_kerbau").html('<audio controls autoplay> <source src="Audio/kerbau.mp3"  type="audio/mpeg"> </audio>');
        $("#musik_kerbau").hide();
      });
      break;
    default:
      break;
  }
}
