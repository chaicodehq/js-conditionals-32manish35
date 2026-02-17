/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hour are rounded UP (e.g., 1.5 hour → 2 hour)
 *   - The fee should never exceed the daily maximum
 *   - If hour is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hour    → $5 + $3 + $3 = $11
 *   - car, 0.5 hour  → rounds up to 1 hour → $5
 *   - car, 24 hour   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hour - Number of hour parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  let hour = Math.ceil(hours)
  console.log(hour)
  // Your code here
  if(hour<=0 || vehicleType !== "car" && vehicleType !== "motorcycle" && vehicleType !== "bus"){
    return -1
  }
  if(vehicleType=="car" && hour>=1){

    if(hour>=1){
      let total =  5+(3*(hour-1))
      if(total<=30){
        return total
      }
      else {
        return 30
      }

    }
    }
  else if(vehicleType=="motorcycle" && hour>=1){
    if(hour>=1){
      let total =  3+(2*(hour-1))
      if(total<=18){
        return total
      }
      else {
        return 18
      }

    }}
  else if(vehicleType=="bus" && hour >=1){
   if(hour>=1){
      let total =  10+(7*(hour-1))
      if(total<=60){
        return total
      }
      else {
        return 60
      }
      

    }
  }

}
console.log(calculateParkingFee(3,'bus'))
