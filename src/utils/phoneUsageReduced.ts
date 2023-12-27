import { totalSchoolData } from "@/Components/totalSchools";

export const phoneUsageReduced = (time:string): string => {
    let timeString = "default"
    switch (time) {
        case "10m":
            timeString = "10 minutes less per day"
            break;
        case "15m":
             timeString = "15 minutes less per day"
            break
        case "30m":
             timeString = "30 minutes less per day"
            break
        case "1hr":
             timeString = "1 hour less per day"
            break
        default:
            break;
    }
    return timeString
}



export const carbonCost = (time:string): number => {
    let timeString = 1
    switch (time) {
        case "10m":
            timeString = 0.235 * 1000
            break;
        case "15m":
             timeString = 0.3525*1000
            break
        case "30m":
             timeString = 0.705*1000
            break
        case "1hr":
             timeString = 1.25*1000
            break
        default:
            break;
    }
    return timeString
}

export const carbonTonne = (time: string,town:string,school:string): string => {
    const schoolValue = totalSchoolData.find(item => item.town === town && item.school === school)
    let total = 0
    let totalTones = "0"
    if (schoolValue) {
        total = schoolValue.total
    }
    switch (time) {
        case "10m":
             totalTones = (total*0.235).toFixed(2)
            break;
        case "15m":
             totalTones = (total*0.3525).toFixed(2)
            break;
        case "30m":
             totalTones = (total*0.705).toFixed(2)
            break;
        case "1hr":
             totalTones = (total*1.25).toFixed(2)
            break;
    
        default:
            break;
    }
    return totalTones
}