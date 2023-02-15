import '../styles/tailwind.css';

export const parameters = {
    options: {
        storySort: {
            order: [
                'Get Started', [
                    'Introduction',
                    'Templates', [
                        'Basic Markup',
                        'Grey Section',
                        'Alternating Sections',
                        'Grids And Columns',
                    ],
                ],
                'Components',
                'Layouts', [
                    'Main',
                    'Container',
                    'Column',
                    'Aside',
                    'Panel',
                    'Stacked List',
                ],
                'Project Templates', [
                    'Events Calendar',
                    'Intranet',
                    'cutheme', [
                        'Single Page',
                        'Grey Container Intro'
                    ]
                ]
            ],
        },
    },
  actions: { argTypesRegex: '^on.*' },
};

var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=Function.prototype`;
    document.body.appendChild(script);
    