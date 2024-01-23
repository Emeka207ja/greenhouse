export default function EmissionCarNtrashNTrashEquivalence(numValue: number): string{
   
    let text: string = "no match"
    switch (true) {
        case numValue >= 0.5 && numValue <=0.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 0.6 acres of forest in a year"
            break;
        case numValue >= 1 && numValue <= 1.49:
            text = "That's about the same as taking an average car off the road for two-and-a-half months";
            break;
        case numValue >= 1.5 && numValue <= 1.99:
            text = "That's about the same as 65 domestic rubbish bags being recycled instead of buried in landfill";
            break;
         case numValue >= 2 && numValue <= 2.49:
            text = "That's about the same as taking an average car off the road for almost six months";
            break;
         case numValue >= 2.5 && numValue <= 2.99:
            text = "That's about the same as 108 domestic rubbish bags being recycled instead of buried in landfill";
            break;
          case numValue >= 3 && numValue <= 3.49:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 3.6 acres of forest in a year";
            break;
         case numValue >= 3.5 && numValue <= 3.99:
            text = "That's about the same as taking an average car off the road for nine months";
            break;
         case numValue >= 4 && numValue <= 4.49:
            text = "That's about the same as taking an average car off the road for almost 11 months";
            break;
        case numValue >= 4.5 && numValue <= 4.99:
            text = "That's about the same as 195 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 5 && numValue <= 5.49:
            text = "That's about the same as taking an average car off the road for a year and one month";
            break;
        case numValue >= 5.5 && numValue <= 5.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 6.6 acres of forest in a year";
            break;
        case numValue >= 6 && numValue <= 6.49:
            text = "That's about the same as taking an average car off the road for a year and four months";
            break;
        case numValue >= 6.5 && numValue <= 6.99:
            text = "That's about the same as taking an average car off the road for a year and five months";
            break;
        case numValue >= 7 && numValue <= 7.49:
            text = "That's about the same as 303 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 7.5 && numValue <= 7.99:
            text = "That's about the same as taking an average car off the road for a year and seven months";
            break;
        case numValue >= 8 && numValue <= 8.49:
            text = "That's about the same as taking an average car off the road for almost 22 months";
            break;
        case numValue >= 8.5 && numValue <= 8.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 10.1 acres of forest in a year";
            break;
        case numValue >= 9 && numValue <= 9.49:
            text = "That's about the same as taking two average cars off the road for a year";
            break;
        case numValue >= 9.5 && numValue <= 9.99:
            text = "That's about the same as taking two average cars off the road for a year and one month";
            break;
        case numValue >= 10 && numValue <= 10.99:
            text = "That's about the same as taking two average cars off the road for a year and a month";
            break;
        case numValue >= 11 && numValue <= 11.99:
            text = "That's about the same as taking two average cars off the road for over 13 months";
            break;
        case numValue >= 12 && numValue <= 12.99:
            text = "That's about the same as taking two average cars off the road for just over a year and four months";
            break;
        case numValue >= 13 && numValue <= 13.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 15.5 acres of forest in a year";
            break;
        case numValue >= 14 && numValue <= 14.99:
            text = "That's about the same as taking two average cars off the road for about 18 months";
            break;
        case numValue >= 15 && numValue <= 15.99:
            text = "That's about the same as 649 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 16 && numValue <= 16.99:
            text = "That's about the same as taking three average cars off the road for a year and two months";
            break;
        case numValue >= 17 && numValue <= 17.99:
            text = "That's about the same as taking three average cars off the road for a year and a quarter";
            break;
        case numValue >= 18 && numValue <= 18.99:
            text = "That's about the same as taking four average cars off the road for a year";
            break;
        case numValue >= 19 && numValue <= 19.99:
            text = "That's about the same as taking four average cars off the road for just over a year";
            break;
        case numValue >= 20 && numValue <= 20.99:
            text = "That's about the same as taking four average cars off the road for a year  and six weeks";
            break;
        case numValue >= 25 && numValue <= 29.99:
            text = "That's about the same as taking five average cars off the road for just over 13 months";
            break;
        case numValue >= 30 && numValue <= 34.99:
            text = "That's about the same as 1,299 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 35 && numValue <= 39.99:
            text = "That's about the same as taking seven average cars off the road for almost a year";
            break;
        case numValue >= 40 && numValue <= 44.99:
            text = "That's about the same as taking nine average cars off the road for a year";
            break;
        case numValue >= 45 && numValue <= 49.99:
            text = "That's about the same as taking 10 average cars off the road for a year";
            break;
        case numValue >= 50 && numValue <= 54.99:
            text = "That's about the same as 2,164 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 55 && numValue <= 59.99:
            text = "That's about the same as taking 12 average cars off the road for a year";
            break;
        case numValue >= 60 && numValue <= 64.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 71.6 acres of forest in a year";
            break;
        case numValue >= 65 && numValue <= 69.99:
            text = "That's about the same as taking 14 average cars off the road for just over a year";
            break;
        case numValue >= 70 && numValue <= 74.99:
            text = "That's about the same as taking 15 average cars off the road for just over a year";
            break;
        case numValue >= 75 && numValue <= 79.99:
            text = "That's about the same as 3,246 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 80 && numValue <= 84.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 95.4 acres of forest in a year";
            break;
        case numValue >= 85 && numValue <= 89.99:
            text = "That's about the same as taking 19 average cars off the road for a year";
            break;
        case numValue >= 90 && numValue <= 94.99:
            text = "That's about the same as taking 20 average cars off the road for a year";
            break;
        case numValue >= 95 && numValue <= 99.99:
            text = "That's about the same as taking 21 average cars off the road for a year";
            break;
        case numValue >= 100 && numValue <= 109.99:
            text = "That's about the same as 4,329 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 110 && numValue <= 119.99:
            text = "That's about the same as taking 24 average cars off the road for a year";
            break;
        case numValue >= 120 && numValue <= 129.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 143 acres of forest in a year";
            break;
        case numValue >= 130 && numValue <= 139.99:
            text = "That's about the same as taking 29 average cars off the road for a year";
            break;
        case numValue >= 140 && numValue <= 149.99:
            text = "That's about the same as taking 31 average cars off the road for a year";
            break;
        case numValue >= 150 && numValue <= 159.99:
            text = "That's about the same as 6,493 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 160 && numValue <= 169.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 191 acres of forest in a  year";
            break;
        case numValue >= 170 && numValue <= 179.99:
            text = "That's about the same as taking 38 average cars off the road for a year";
            break;
        case numValue >= 180 && numValue <= 189.99:
            text = "That's about the same as 7,791 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 190 && numValue <= 199.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 227 acres of forest in a year";
            break;
        case numValue >= 200 && numValue <= 249.99:
            text = "That's about the same as 8,657 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 250 && numValue <= 299.99:
            text = "That's about the same as taking 55 average cars off the road for a year";
            break;
        case numValue >= 300 && numValue <= 349.99:
            text = "That's about the same as 12,986 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 350 && numValue <= 399.99:
            text = "That's about the same as taking 80 average cars off the road for a year";
            break;
        case numValue >= 400 && numValue <= 449.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 477 acres of forest in a year";
            break;
        case numValue >= 450 && numValue <= 499.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 537 acres of forest in a year";
            break;
        case numValue >= 500 && numValue <= 549.99:
            text = "That's about the same as taking 110 average cars off the road for a year";
            break;
        case numValue >= 550 && numValue <= 599.99:
            text = "That's about the same as taking 120 average cars off the road for a year";
            break;
        case numValue >= 600 && numValue <= 649.99:
            text = "That's about the same as 25,971 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 650 && numValue <= 699.99:
            text = "That's about the same as taking 150 average cars off the road for a year";
            break;
        case numValue >= 700 && numValue <= 749.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 835 acres of forest in a year";
            break;
        case numValue >= 750 && numValue <= 799.99:
            text = "That's about the same as taking 170 average cars off the road for a year";
            break;
        case numValue >= 800 && numValue <= 849.99:
            text = "That's about the same as taking 180 average cars off the road for a year";
            break;
        case numValue >= 850 && numValue <= 899.99:
            text = "That's about the same as 36,793 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 900 && numValue <= 949.99:
            text = "That's about the same as taking 200 average cars off the road for a year";
            break;
        case numValue >= 950 && numValue <= 999.99:
            text = "That's about the same as 41,121 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 1000 && numValue <= 1999.99:
            text = "That's about the same as taking 220 average cars off the road for a year";
            break;
        case numValue >= 2000 && numValue <= 2999.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 2,385 acres of forest in a year";
            break;
        case numValue >= 3000 && numValue <= 3999.99:
            text = "That's about the same as taking 670 average cars off the road for a year";
            break;
        case numValue >= 4000 && numValue <= 4999.99:
            text = "That's about the same as 173,143 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 5000 && numValue <= 5999.99:
            text = "That's about the same as taking 1,100 average cars off the road for a year";
            break;
        case numValue >= 6000 && numValue <= 6999.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 7,155 acres of forest in a year";
            break;
        case numValue >= 7000 && numValue <= 7999.99:
            text = "That's about the same as taking 1,600 average cars off the road for a year";
            break;
        case numValue >= 8000 && numValue <= 8999.99:
            text = "That's about the same as 346,285 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 9000 && numValue <= 9999.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 10,733 acres of forest in a year";
            break;
        case numValue >= 10000 && numValue <= 14999.99:
            text = "That's about the same as taking 2,200 average cars off the road for a year";
            break;
        case numValue >= 15000 && numValue <= 19999.99:
            text = "That's about the same as taking 3,300 average cars off the road for a year";
            break;
        case numValue >= 20000 && numValue <= 24999.99:
            text = "That's about the same as taking 4,500 average cars off the road for a year";
            break;
        case numValue >= 25000 && numValue <= 29999.99:
            text = "That's about the same as 1,082,141 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 30000 && numValue <= 34999.99:
            text = "That's about the same as taking 6,700 average cars off the road for a year";
            break;
        case numValue >= 35000 && numValue <= 39999.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 41,738 acres of forest in a year";
            break;
        case numValue >= 40000 && numValue <= 44999.99:
            text = "That's about the same as taking 8,900 average cars off the road for a year";
            break;
        case numValue >= 45000 && numValue <= 49999.99:
            text = "That's about the same as 1,947,854 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 50000 && numValue <= 54999.99:
            text = "That's about the same as taking 11,000 average cars off the road for a year";
            break;
        case numValue >= 55000 && numValue <= 59999.99:
            text = "That's about the same as taking 12,000 average cars off the road for a year";
            break;
        case numValue >= 60000 && numValue <= 64999.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 71,551 acres of forest in a year";
            break;
        case numValue >= 65000 && numValue <= 69999.99:
            text = "That's about the same as taking 14,500 average cars off the road for a year";
            break;
        case numValue >= 70000 && numValue <= 74999.99:
            text = "That's about the same as 3,029,995 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 75000 && numValue <= 79999.99:
            text = "That's about the same as taking 16,700 average cars off the road for a year";
            break;
        case numValue >= 80000 && numValue <= 84999.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 95,401 acres of forest in a year";
            break;
        case numValue >= 85000 && numValue <= 89999.99:
            text = "That's about the same as taking 18,900 average cars off the road for a year";
            break;
        case numValue >= 90000 && numValue <= 94999.99:
            text = "That's about the same as taking 20,000 average cars off the road for a year";
            break;
        case numValue >= 95000 && numValue <= 99999.99:
            text = "That's about the same as 4,112,136 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 100000 && numValue <= 149999.99:
            text = "That's about the same as taking 22,000 average cars off the road for a year";
            break;
        case numValue >= 150000 && numValue <= 199999.99:
            text = "That's about the same as taking 33,000 average cars off the road for a year";
            break;
        case numValue >= 200000 && numValue <= 249999.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 238,504 acres of forest in a year";
            break;
        case numValue >= 250000 && numValue <= 299999.99:
            text = "That's about the same as taking 55,000 average cars off the road for a year";
            break;
        case numValue >= 300000 && numValue <= 349999.99:
            text = "That's about the same as 12,985,692 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 350000 && numValue <= 399999.99:
            text = "That's about the same as taking 78,000 average cars off the road for a year";
            break;
        case numValue >= 400000 && numValue <= 449999.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 477,007 acres of forest in a year";
            break;
        case numValue >= 450000 && numValue <= 499999.99:
            text = "That's about the same as taking 100,000 average cars off the road for a year";
            break;
        case numValue >= 500000 && numValue <= 549999.99:
            text = "That's about the same as taking 111,000 average cars off the road for a year";
            break;
        case numValue >= 550000 && numValue <= 599999.99:
            text = "That's about the same as 23,807,101 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 600000 && numValue <= 649999.99:
            text = "That's about the same as taking 133,000 average cars off the road for a year";
            break;
        case numValue >= 650000 && numValue <= 699999.99:
            text = "That's about the same as taking 145,000 average cars off the road for a year";
            break;
        case numValue >= 700000 && numValue <= 749999.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 834,762 acres of forest in a yearr";
            break;
        case numValue >= 750000 && numValue <= 799999.99:
            text = "That's about the same as taking 167,000 average cars off the road for a year";
            break;
        case numValue >= 800000 && numValue <= 849999.99:
            text = "That's about the same as 34,628,511 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        case numValue >= 850000 && numValue <= 899999.99:
            text = "That's about the same as taking 189,000 average cars off the road for a year";
            break;
        case numValue >= 900000 && numValue <= 949999.99:
            text = "That's about the same as the amount of CO2 taken out of the atmosphere by 1,073,266 acres of forest in a year";
            break;
        case numValue >= 950000 && numValue <= 999999.99:
            text = "That's about the same as taking 211,000 average cars off the road for a year";
            break;
        case numValue >= 1000000 && numValue <= 1000000.01:
            text = "That's about the same as 43,285,639 domestic rubbish bags being recycled instead of buried in landfill";
            break;
        default:
            break;
    }
    return text
}