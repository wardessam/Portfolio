export default{
    name:'test',
    title: 'Test',
    type: 'document',
    fields:[{
        name:'name',
        title: 'Name',
        type: 'string'
    },
    {
        name:'cpmpany',
        title: 'Company',
        type: 'string'
    },
    {
        name:'imageurl',
        title: 'Img',
        type: 'image',
        options : {
            hotspot: true
        }
    },
    {
        name:'feedback',
        title: 'Feedback',
        type: 'string'
    }
]
}