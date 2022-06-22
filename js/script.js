function calculateBmi() {
  var weight = document.bmiForm.weight.value;
  var height = document.bmiForm.height.value;
  if (weight > 0 && height > 0) {
    //var finalBmi = Math.round(weight / (((height / 100) * height) / 100));
    var finalBmi = Math.round(weight / (((height / 100) * height) / 100));
    document.getElementById("bmi").innerHTML =
      "Twój wskaźnik masy ciała wynosi: " + "<b>" + finalBmi + "</b>";
    //document.bmiForm.bmi.value = finalBmi;
    if (finalBmi <= 16) {
      document.getElementById("meaning").innerHTML =
        "Twoje BMI wskazuje na: wygłodzenie";
    }
    if (finalBmi >= 16 && finalBmi <= 16.99) {
      document.getElementById("meaning").innerHTML =
        "Twoje BMI wskazuje na:" + "<b>" + "wychudzenie" + "</b>";
    }
    if (finalBmi >= 17 && finalBmi <= 18.49) {
      document.getElementById("meaning").innerHTML =
        "Twoje BMI wskazuje na: niedowaga";
    }
    if (finalBmi >= 18.5 && finalBmi <= 24.99) {
      document.getElementById("meaning").innerHTML =
        "Twoje BMI wskazuje na: prawidłowa waga";
    }
    if (finalBmi >= 25 && finalBmi <= 29.99) {
      document.getElementById("meaning").innerHTML =
        "Twoje BMI wskazuje na: nadwaga";
    }
    if (finalBmi >= 30 && finalBmi <= 34.99) {
      document.getElementById("meaning").innerHTML =
        "Twoje BMI wskazuje na: I stopień otyłości";
    }
    if (finalBmi >= 35 && finalBmi <= 39.99) {
      document.getElementById("meaning").innerHTML =
        "Twoje BMI wskazuje na: II stopień otyłości";
    }
    if (finalBmi >= 40) {
      document.getElementById("meaning").innerHTML =
        "Twoje BMI wskazuje na: otyłość skrajna ";
    }
  } else {
    alert("Uzupełnij wszystkie pola poprawnie!");
  }
}
function resetBMI() {
  document.getElementById("bmi").innerHTML = " ";
  document.getElementById("meaning").innerHTML = " ";
}

function calculateKal() {
  var weight = parseFloat(document.kalForm.weight.value);
  var height = parseFloat(document.kalForm.height.value);
  var age = parseInt(document.kalForm.age.value);
  var sel = document.getElementById("activity");
  var option = sel.options[sel.selectedIndex];
  var value = option.value;
  var PAL = 0;
  if (value == 1) {
    PAL = 1.2;
  } else if (value == 2) {
    PAL = 1.375;
  } else if (value == 3) {
    PAL = 1.55;
  } else if (value == 4) {
    PAL = 1.725;
  } else if (value == 5) {
    PAL = 1.9;
  } else {
    PAL = "coś nie tak";
  }

  if (document.getElementById("sexM").checked == true) {
    var bmr = Math.round(PAL * (66 + 13.7 * weight + 5 * height - 6.8 * age));
  } else if (document.getElementById("sexF").checked == true) {
    var bmr = Math.round(PAL * (665 + 9.6 * weight + 1.8 * height - 4.7 * age));
  } else {
    alert("Coś nie tak!");
  }

  document.getElementById("wynik").innerHTML =
    "Twoje dzienne zapotrzebowanie kaloryczne wynosi: " + "<b>" + bmr + "</b>" + " kcal";
}
function resetBMR() {
  document.getElementById("wynik").innerHTML = " ";
}
