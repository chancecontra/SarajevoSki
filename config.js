var config = {
    style: 'mapbox://styles/krejzifrik/cklpsca3d171u17p8afw95xo8',
    accessToken: 'pk.eyJ1Ijoia3JlanppZnJpayIsImEiOiJjam5lbDltZDAwZzJ5M2tsZm11OHMwN3RwIn0.lauCZyv4NJYpuC1kdqLDSw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Skijanje oko Sarajeva',
    subtitle: 'und snowboard...',
    byline: '',
    footer: 'Twitter: @capitainefuture',
    chapters: [
        {
            id: '1',
            alignment: 'right',
            hidden: false,
            title: 'Pregled skijališta oko Sarajeva, 2021.',
            image: './images/vucko-1.png',
            description: '',
            location: {
                center: [18.38220, 43.86610],
                zoom: 10.00,
                pitch: 52.00,
                bearing: 147.12
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            alignment: 'right',
            hidden: false,
            title: 'Ravna Planina',
            image: '',
            description: 'Ski centar “Ravna planina” nalazi se u naselju Gornje Pale, na 20 kilometara od Sarajeva i na dva kilometra od centra Pala. Od sezone 2014/15 ovo skijalište otvoreno je za sve posjetioce i ljubitelje zimskih radosti. Vertikalni transport: Gondola kapaciteta 2200 skijaša/posjetilaca na sat.',
            location: {
                center: [18.58869, 43.78752],
                zoom: 14.48,
                pitch: 60,
                bearing: 139.92
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: 'Igman',
            image: '',
            description: 'Kapacitet skijališta – 1.200 skijaša/sat. Ukupna dužina staza – 2.000m, Broj ski žičara -1 (dvosjed), Broj Baby liftova – 5',
            location: {
                center: [18.24475, 43.76766],
                zoom: 15.45,
                pitch: 60,
                bearing: -177.68
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'right',
            hidden: false,
            title: 'Bjelašnica',
            image: '',
            description: 'Kapacitet skijališta – 8.396 skijaša/sat. Ukupna dužina staza – 14km, Broj ski žičara -3 (šestosjed, četverosjed i dvosjed). Broj ski liftova – 5',
            location: {
                center: [18.27543, 43.71360],
                zoom: 14.01,
                pitch: 60,
                bearing: -160.88
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'right',
            hidden: false,
            title: 'Jahorina',
            image: '',
            description: 'Jahorina se može pohvaliti sa 46km alpskih i 10km nordijskih staza. Staze su povezane žičarama za prevoz skijaša i bordera, koje su ukupnog kapaciteta oko 17 000 skijaša na sat (3x šestosjed, 1x dvosjed, 1x gondola, 1x ski lift).',
            location: {
                center: [18.57338, 43.73266],
                zoom: 14.56,
                pitch: 60,
                bearing: 158.72
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
