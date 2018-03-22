export function toFarenheit(kelvin)
{
  let tempFarenheit = Number.parseFloat((kelvin * 1.8) - 459.67).toFixed(1);
  return tempFarenheit;
}
