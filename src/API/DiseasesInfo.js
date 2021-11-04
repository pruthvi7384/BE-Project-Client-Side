import { useState } from 'react'

function DiseasesInfo() {
    const [ info, setInfo ] = useState([
        {
            "_id": '100',
            "disease_name": "Malaria",
            "data_updated_at": "03 Novamber 2021",
            "doctore_id":"",
            "doctore_name":"Pruthviraj Rajput",
            "image":"https://sahyadrihospital.com/wp-content/uploads/2021/04/Be-aware-of-malaria-the-deadly-disease.jpg",
            "details":
                { 
                   "Description": "Malaria is a disease caused by a parasite. The parasite is spread to humans  through the bites of infected mosquitoes. People who have malaria usually feel very sick with a high fever and shaking chills.,While the disease is uncommon in temperate climates, malaria is still common in tropical and subtropical countries. Each year nearly 290 million people are infected with malaria, and more than 400,000 people die of the disease.To reduce malaria infections, world health programs distribute preventive drugs and insecticide-treated bed nets to protect people from mosquito bites. The World Health Organization has recommended a malaria vaccine for use in children who live in countries with high numbers of malaria cases.Protective clothing, bed nets and insecticides can protect you while traveling. You also can take preventive medicine before, during and after a trip to a high-risk area. Many malaria parasites have developed resistance to common drugs used to treat the disease.",
                   "Symptoms":[
                        "Fever",
                        "Chills",
                        "General feeling of discomfort",
                        "Headache",
                        "Nausea and vomiting",
                        "Diarrhea",
                        "Abdominal pain",
                        "Muscle or joint pain",
                        "Fatigue",
                        "Rapid breathing",
                        "Rapid heart rate",
                        "Cough",
                        "Some people who have malaria experience cycles of malaria 'attacks.' An attack usually starts with shivering and chills, followed by a high fever, followed by sweating and a return to normal temperature.",
                        "Malaria signs and symptoms typically begin within a few weeks after being bitten by an infected mosquito. However, some types of malaria parasites can lie dormant in your body for up to a year."
                   ],
                   "precautions":[
                        "If you live in or are traveling to an area where malaria is common, take steps to avoid mosquito bites. Mosquitoes are most active between dusk and dawn. To protect yourself from mosquito bites, you should:",
                        "Cover your skin. Wear pants and long-sleeved shirts. Tuck in your shirt, and tuck pant legs into socks.",
                        "Apply insect repellent to skin. Use an insect repellent registered with the Environmental Protection Agency on any exposed skin. These include repellents that contain DEET, picaridin, IR3535, oil of lemon eucalyptus (OLE), para-menthane-3,8-diol (PMD) or 2-undecanone. Do not use a spray directly on your face. Do not use products with OLE or PMD on children under age 3.",
                        "Apply repellent to clothing. Sprays containing permethrin are safe to apply to clothing.",
                        "Sleep under a net. Bed nets, particularly those treated with insecticides, such as permethrin, help prevent mosquito bites while you are sleeping.",
                   ],
                   "medcine":[
                        "If you'll be traveling to a location where malaria is common, talk to your doctor a few months ahead of time about whether you should take drugs before, during and after your trip to help protect you from malaria parasites.",
                        "In general, the drugs taken to prevent malaria are the same drugs used to treat the disease. What drug you take depends on where and how long you are traveling and your own health."
                   ],
                   "vaccine" : [
                       "The World Health Organization has recommended a malaria vaccine for use in children who live in countries with high numbers of malaria cases.",
                       "Researchers are continuing to develop and study malaria vaccines to prevent infection."
                   ]
                }
            ,
            "most_predicated_area":
                { 
                    "pin_code":"425444",
                    "city":"Shahada",
                    "area":"Patel Rasidansy"
                }
        },
        {
            "_id": '101',
            "disease_name": "Malaria",
            "data_updated_at": "03 Novamber 2021",
            "doctore_id":"",
            "doctore_name":"Pruthviraj Rajput",
            "comments":200,
            "image":"https://sahyadrihospital.com/wp-content/uploads/2021/04/Be-aware-of-malaria-the-deadly-disease.jpg",
            "details":
                { 
                   "Description": "Malaria is a disease caused by a parasite. The parasite is spread to humans  through the bites of infected mosquitoes. People who have malaria usually feel very sick with a high fever and shaking chills.,While the disease is uncommon in temperate climates, malaria is still common in tropical and subtropical countries. Each year nearly 290 million people are infected with malaria, and more than 400,000 people die of the disease.To reduce malaria infections, world health programs distribute preventive drugs and insecticide-treated bed nets to protect people from mosquito bites. The World Health Organization has recommended a malaria vaccine for use in children who live in countries with high numbers of malaria cases.Protective clothing, bed nets and insecticides can protect you while traveling. You also can take preventive medicine before, during and after a trip to a high-risk area. Many malaria parasites have developed resistance to common drugs used to treat the disease.",
                   "Symptoms":[
                        "Fever",
                        "Chills",
                        "General feeling of discomfort",
                        "Headache",
                        "Nausea and vomiting",
                        "Diarrhea",
                        "Abdominal pain",
                        "Muscle or joint pain",
                        "Fatigue",
                        "Rapid breathing",
                        "Rapid heart rate",
                        "Cough",
                        "Some people who have malaria experience cycles of malaria 'attacks.' An attack usually starts with shivering and chills, followed by a high fever, followed by sweating and a return to normal temperature.",
                        "Malaria signs and symptoms typically begin within a few weeks after being bitten by an infected mosquito. However, some types of malaria parasites can lie dormant in your body for up to a year."
                   ],
                   "precautions":[
                        "If you live in or are traveling to an area where malaria is common, take steps to avoid mosquito bites. Mosquitoes are most active between dusk and dawn. To protect yourself from mosquito bites, you should:",
                        "Cover your skin. Wear pants and long-sleeved shirts. Tuck in your shirt, and tuck pant legs into socks.",
                        "Apply insect repellent to skin. Use an insect repellent registered with the Environmental Protection Agency on any exposed skin. These include repellents that contain DEET, picaridin, IR3535, oil of lemon eucalyptus (OLE), para-menthane-3,8-diol (PMD) or 2-undecanone. Do not use a spray directly on your face. Do not use products with OLE or PMD on children under age 3.",
                        "Apply repellent to clothing. Sprays containing permethrin are safe to apply to clothing.",
                        "Sleep under a net. Bed nets, particularly those treated with insecticides, such as permethrin, help prevent mosquito bites while you are sleeping.",
                   ],
                   "medcine":[
                        "If you'll be traveling to a location where malaria is common, talk to your doctor a few months ahead of time about whether you should take drugs before, during and after your trip to help protect you from malaria parasites.",
                        "In general, the drugs taken to prevent malaria are the same drugs used to treat the disease. What drug you take depends on where and how long you are traveling and your own health."
                   ],
                   "vaccine" : [
                       "The World Health Organization has recommended a malaria vaccine for use in children who live in countries with high numbers of malaria cases.",
                       "Researchers are continuing to develop and study malaria vaccines to prevent infection."
                   ]
                }
            ,
            "most_predicated_area":
                { 
                    "pin_code":"425444",
                    "city":"Shahada",
                    "area":"Patel Rasidansy"
                }
        },
        {
            "_id": '102',
            "disease_name": "Malaria",
            "data_updated_at": "03 Novamber 2021",
            "doctore_id":"",
            "doctore_name":"Pruthviraj Rajput",
            "comments":200,
            "image":"https://sahyadrihospital.com/wp-content/uploads/2021/04/Be-aware-of-malaria-the-deadly-disease.jpg",
            "details":
                { 
                   "Description": "Malaria is a disease caused by a parasite. The parasite is spread to humans  through the bites of infected mosquitoes. People who have malaria usually feel very sick with a high fever and shaking chills.,While the disease is uncommon in temperate climates, malaria is still common in tropical and subtropical countries. Each year nearly 290 million people are infected with malaria, and more than 400,000 people die of the disease.To reduce malaria infections, world health programs distribute preventive drugs and insecticide-treated bed nets to protect people from mosquito bites. The World Health Organization has recommended a malaria vaccine for use in children who live in countries with high numbers of malaria cases.Protective clothing, bed nets and insecticides can protect you while traveling. You also can take preventive medicine before, during and after a trip to a high-risk area. Many malaria parasites have developed resistance to common drugs used to treat the disease.",
                   "Symptoms":[
                        "Fever",
                        "Chills",
                        "General feeling of discomfort",
                        "Headache",
                        "Nausea and vomiting",
                        "Diarrhea",
                        "Abdominal pain",
                        "Muscle or joint pain",
                        "Fatigue",
                        "Rapid breathing",
                        "Rapid heart rate",
                        "Cough",
                        "Some people who have malaria experience cycles of malaria 'attacks.' An attack usually starts with shivering and chills, followed by a high fever, followed by sweating and a return to normal temperature.",
                        "Malaria signs and symptoms typically begin within a few weeks after being bitten by an infected mosquito. However, some types of malaria parasites can lie dormant in your body for up to a year."
                   ],
                   "precautions":[
                        "If you live in or are traveling to an area where malaria is common, take steps to avoid mosquito bites. Mosquitoes are most active between dusk and dawn. To protect yourself from mosquito bites, you should:",
                        "Cover your skin. Wear pants and long-sleeved shirts. Tuck in your shirt, and tuck pant legs into socks.",
                        "Apply insect repellent to skin. Use an insect repellent registered with the Environmental Protection Agency on any exposed skin. These include repellents that contain DEET, picaridin, IR3535, oil of lemon eucalyptus (OLE), para-menthane-3,8-diol (PMD) or 2-undecanone. Do not use a spray directly on your face. Do not use products with OLE or PMD on children under age 3.",
                        "Apply repellent to clothing. Sprays containing permethrin are safe to apply to clothing.",
                        "Sleep under a net. Bed nets, particularly those treated with insecticides, such as permethrin, help prevent mosquito bites while you are sleeping.",
                   ],
                   "medcine":[
                        "If you'll be traveling to a location where malaria is common, talk to your doctor a few months ahead of time about whether you should take drugs before, during and after your trip to help protect you from malaria parasites.",
                        "In general, the drugs taken to prevent malaria are the same drugs used to treat the disease. What drug you take depends on where and how long you are traveling and your own health."
                   ],
                   "vaccine" : [
                       "The World Health Organization has recommended a malaria vaccine for use in children who live in countries with high numbers of malaria cases.",
                       "Researchers are continuing to develop and study malaria vaccines to prevent infection."
                   ]
                }
            ,
            "most_predicated_area":
                { 
                    "pin_code":"425444",
                    "city":"Shahada",
                    "area":"Patel Rasidansy"
                }
        },
        {
            "_id":'103',
            "disease_name": "Malaria",
            "data_updated_at": "03 Novamber 2021",
            "doctore_id":"",
            "doctore_name":"Pruthviraj Rajput",
            "comments":200,
            "image":"https://sahyadrihospital.com/wp-content/uploads/2021/04/Be-aware-of-malaria-the-deadly-disease.jpg",
            "details":
                { 
                   "Description": "Malaria is a disease caused by a parasite. The parasite is spread to humans  through the bites of infected mosquitoes. People who have malaria usually feel very sick with a high fever and shaking chills.,While the disease is uncommon in temperate climates, malaria is still common in tropical and subtropical countries. Each year nearly 290 million people are infected with malaria, and more than 400,000 people die of the disease.To reduce malaria infections, world health programs distribute preventive drugs and insecticide-treated bed nets to protect people from mosquito bites. The World Health Organization has recommended a malaria vaccine for use in children who live in countries with high numbers of malaria cases.Protective clothing, bed nets and insecticides can protect you while traveling. You also can take preventive medicine before, during and after a trip to a high-risk area. Many malaria parasites have developed resistance to common drugs used to treat the disease.",
                   "Symptoms":[
                        "Fever",
                        "Chills",
                        "General feeling of discomfort",
                        "Headache",
                        "Nausea and vomiting",
                        "Diarrhea",
                        "Abdominal pain",
                        "Muscle or joint pain",
                        "Fatigue",
                        "Rapid breathing",
                        "Rapid heart rate",
                        "Cough",
                        "Some people who have malaria experience cycles of malaria 'attacks.' An attack usually starts with shivering and chills, followed by a high fever, followed by sweating and a return to normal temperature.",
                        "Malaria signs and symptoms typically begin within a few weeks after being bitten by an infected mosquito. However, some types of malaria parasites can lie dormant in your body for up to a year."
                   ],
                   "precautions":[
                        "If you live in or are traveling to an area where malaria is common, take steps to avoid mosquito bites. Mosquitoes are most active between dusk and dawn. To protect yourself from mosquito bites, you should:",
                        "Cover your skin. Wear pants and long-sleeved shirts. Tuck in your shirt, and tuck pant legs into socks.",
                        "Apply insect repellent to skin. Use an insect repellent registered with the Environmental Protection Agency on any exposed skin. These include repellents that contain DEET, picaridin, IR3535, oil of lemon eucalyptus (OLE), para-menthane-3,8-diol (PMD) or 2-undecanone. Do not use a spray directly on your face. Do not use products with OLE or PMD on children under age 3.",
                        "Apply repellent to clothing. Sprays containing permethrin are safe to apply to clothing.",
                        "Sleep under a net. Bed nets, particularly those treated with insecticides, such as permethrin, help prevent mosquito bites while you are sleeping.",
                   ],
                   "medcine":[
                        "If you'll be traveling to a location where malaria is common, talk to your doctor a few months ahead of time about whether you should take drugs before, during and after your trip to help protect you from malaria parasites.",
                        "In general, the drugs taken to prevent malaria are the same drugs used to treat the disease. What drug you take depends on where and how long you are traveling and your own health."
                   ],
                   "vaccine" : [
                       "The World Health Organization has recommended a malaria vaccine for use in children who live in countries with high numbers of malaria cases.",
                       "Researchers are continuing to develop and study malaria vaccines to prevent infection."
                   ]
                }
            ,
            "most_predicated_area":
                { 
                    "pin_code":"425444",
                    "city":"Shahada",
                    "area":"Patel Rasidansy"
                }
        }
        
    ])
    return info
}

export default DiseasesInfo
