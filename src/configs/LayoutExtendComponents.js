const groupType = "LayoutExtendComponentsGroupType";
export const layoutComponentsArray = [
    {
        type: 'grid',
        name: '栅格布局',
        icon: 'icon-grid-',
        columns: [
            {
                span: 12,
                list: []
            },
            {
                span: 12,
                list: []
            }
        ],
        options: {
            gutter: 0,
            justify: 'start',
            align: 'top'
        }
    }
]
const LayoutExtendComponents = {};
LayoutExtendComponents.Components = getComponents();
LayoutExtendComponents.groupType = groupType;
function getComponents() {
    const result = JSON.parse(JSON.stringify(layoutComponentsArray));
    for (let i = 0; i < result.length; i++) {
        result[i].groupType = groupType;
    }
    return result;
}

export default LayoutExtendComponents;
