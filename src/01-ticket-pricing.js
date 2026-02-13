/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here
  let chargeForChildren = 8
  let chargeForTeens = 12
  let chargeForAdults = 15
  let chargeForSeniors = 10
  let weekendSurcharge = 3
  if(age>=0&&age<=12){
    if(isWeekend){
      return chargeForChildren+weekendSurcharge
    }
    else{
      return chargeForChildren
    }
  }
  else if(age>12&&age<=17){
if(isWeekend){
      return chargeForTeens+weekendSurcharge
    }
    else{
      return chargeForTeens
    }
  }
  else if(age>17&&age<=59){
    if(isWeekend){
      return chargeForAdults+weekendSurcharge
    }
    else{
      return chargeForAdults
    }
  }
   else if(age>59&&age<=110){
    if(isWeekend){
      return chargeForSeniors+weekendSurcharge
    }
    else{
      return chargeForSeniors
    }
  }
  else{
    return -1
  }
}
console.log(getTicketPrice(75,false))
