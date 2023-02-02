let pieChart = document.getElementById('pieChart');


new Chart (pieChart,{
    type: 'pie',
    data: {
        labels: ['Albania', 'BIH', 'Bulgaria', 'Croatia', 'Montenegro', 'Romania', 'Serbia','Slovenia'],
        datasets: [
            {
                label: 'Popis stanovnistva',
                data:[2.8, 3.2, 6.6, 4.0 ,0.626 ,19.8,7.1, 2.1],
                backgroundColor: [
                    'rgba(227, 13, 26, 0.8)',
                    'rgba(255, 255, 0, 0.8)',
                    'rgba(255, 114, 0, 0.8)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(61, 186, 57, 1)',
                    'rgba(61, 186, 232, 1)',
                    'rgba(145, 98, 208, 1)',
                    'rgba(126, 0, 0, 1)'
                ]
                                 
            }
        ]

    }
})

let barChart = document.getElementById('barChart');

new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['petak', 'subota', 'nedjelja', 'ponedeljak', 'utroak', 'srijeda'],
        datasets: [
            {
                label: 'Vrijeme za narednih 5 dana',
                data: [7, 4, -2, -4, -1, 1],
                backgroundColor: [
                    'rgba(227, 13, 26, 0.8)',
                    'rgba(255, 255, 0, 0.8)',
                    'rgba(255, 114, 0, 0.8)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(61, 186, 57, 1)',
                ]
            }]
    }
})

const polarAreaChart = document.getElementById('polarAreaChart');

new Chart(polarAreaChart, {
    type: 'polarArea',
    data: {
        labels: ['Sijecanj', 'Veljaca', 'Ozukaj', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'],
        datasets: [{
            label: 'Dani u mjesecu',
            data: [31, 20, 25, 45, 54, 12, 5, 60, 10, 3, 44, 35 ],
            backgroundColor: [
                'rgba(227, 13, 26, 0.8)',
                'rgba(255, 255, 0, 0.8)',
                'rgba(255, 114, 0, 0.8)',
                'rgba(255, 0, 0, 1)',
                'rgba(61, 186, 57, 1)',
                'rgba(245, 40, 0, 0.54)',
                'rgba(245, 166, 0, 0.54)',
                'rgba(32, 166, 0, 0.54)',
                'rgba(32, 232, 169, 0.54)',
                'rgba(181, 120, 206, 1)',
                'rgba(181, 200, 0, 1)',
                'rgba(181, 0, 133, 1)',
            ]
        }]
    }
})

const lineChart = document.getElementById('lineChart');

let labelss = [
    '01 Januar',
    '02 Januar',
    '03 Januar',
    '04 Januar',
    '05 Januar',
    '06 Januar',
    '07 Januar',
    '08 Januar',
    '09 Januar',
    '10 Januar',
    '11 Januar',
    '12 Januar',
    '13 Januar',
    '14 Januar',
    '15 Januar',
    '16 Januar',
    '17 Januar',
    '18 Januar',
]

new Chart(lineChart,{
    type: 'line',
    data: {
        labels: labelss,
        datasets: [
            {
                label: 'Povratni pregledi',
                data: [1844 , 1554 , 1273 , 1284 , 1126 , 946  , 964  , 1793 , 1432 , 1130 , 1074 , 954 , 856 , 833 , 1536 , 1416 , 1248 , 1226],
                borderColor: [
                    'rgba(255, 0, 0, 1)'
                ]
            },
            {
                label: 'Trenutni pregledi',
                data: [1199 , 1314 , 1147 , 1403 , 1217 , 1015 , 1138 , 1272 , 957  , 862  , 716  , 712 , 610 , 585 , 847  , 744  , 756  , 781],
                borderColor: [
                    'rgba(0, 0, 255, 1)'
                ]
            }
        ]
    }
})