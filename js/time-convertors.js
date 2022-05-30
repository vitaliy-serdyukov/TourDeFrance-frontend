

function timeSecondsToString(seconds) {
  return [
    parseInt(seconds / 60 / 60),
    parseInt(seconds / 60 % 60),
    parseInt(seconds % 60)
  ]
    .join(":")
    .replace(/\b(\d)\b/g, "0$1")
}


function timeStringToSeconds(timeStr) {
  let a = timeStr.split(':'); // split it at the colons
// minutes are worth 60 seconds. Hours are worth 60 minutes.
  return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
}
/*result = timeStringToSeconds('02:46:39');
out(result);*/
