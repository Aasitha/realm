import Realm from "realm";
class Task extends Realm.Object<Task> {
  _id!: number;
  name!: string;
  status?: string;
  owner_id?: string;

  static schema = {
    name: "Task",
    properties: {
      _id: "int",
      name: "string",
      status: "string?",
      owner_id: "string?",
    },
    primaryKey: "_id",
  };
}

(async ()=>{
    const realm = await Realm.open({
  schema: [Task],
});
const allTasks = realm.objects(Task);
// Add a couple of Tasks in a single, atomic transaction.
realm.write(() => {
    realm.create(Task, {
      _id: 1,
      name: "go grocery shopping",
      status: "Open",
    });
  
    realm.create(Task, {
      _id: 2,
      name: "go exercise",
      status: "Open",
    });
  });
  
  const task1 = allTasks.find((task) => task._id == 1);
  const task2 = allTasks.find((task) => task._id == 2);
  console.log(task1);
  realm.write(() => {
    // Modify an object.
    task1!.status = "InProgress";
  
    // Delete an object.
    console.log(task1)
    realm.delete(task2);
  });
  
})();

