var age = +prompt("Yoshingizni kiriting")
if (age <= 18) {
    alert("Yoshsiz o'qishingiz kerak")
} else if (age <= 50) {
    alert("Ishlashingiz kerak")
} else if (age <= 59) {
    alert("Yaqinda pensiyaga chiqasiz")
} else if (age <= 150) {
    alert("Pensionerga o'xshaysiz xali tirik bo'lsangiz")
} else {
    alert("Nimadir notog'ri ketib qoldi")
}