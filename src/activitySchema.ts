export const activitySchema={
    name:"Activity",
    primaryKey: '_id',
    properties:{
        _id:"string",
        activityId:"string",
        activityBy:"string",
        activityAction:"string",
        activitySource:"string",
        activityTime:"int",
        activityUsername:{type:"string",optional:true},
        activityType:"int",
        __v:"int"
    }
}