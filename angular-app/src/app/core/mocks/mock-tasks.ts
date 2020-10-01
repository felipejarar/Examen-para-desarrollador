import { Task } from '../models/task.model';
import { User } from '../models/user.model';
import { USERS } from './mock-users';


export var TASKS : Task[] = [
    {   
        id : 1, 
        title : "Spike - develop a chrome extension to decorate Trello's board directly",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis libero sit amet purus egestas finibus. Aenean turpis quam, finibus id mattis ut, interdum ut elit. Etiam at dignissim erat. Etiam quis facilisis nulla. Integer posuere risus mollis nibh posuere tristique. Etiam at libero vel risus viverra ornare. In sollicitudin ac libero eu rutrum. Nulla eu facilisis augue, eget aliquam nunc. Duis at eros vel ipsum tincidunt sollicitudin. Vivamus gravida velit justo, sit amet tempor orci lobortis sed. In leo purus, fermentum a scelerisque a, gravida ac orci. Pellentesque in risus magna.",
        assignees : [USERS[0]],
        status: "TODO",
        start_date : new Date(2020,30,10),
        end_date : new Date(2020, 1, 11),
    },
    {   
        id : 2, 
        title : "Webapp - hook to production database",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis libero sit amet purus egestas finibus. Aenean turpis quam, finibus id mattis ut, interdum ut elit. Etiam at dignissim erat. Etiam quis facilisis nulla. Integer posuere risus mollis nibh posuere tristique. Etiam at libero vel risus viverra ornare. In sollicitudin ac libero eu rutrum. Nulla eu facilisis augue, eget aliquam nunc. Duis at eros vel ipsum tincidunt sollicitudin. Vivamus gravida velit justo, sit amet tempor orci lobortis sed. In leo purus, fermentum a scelerisque a, gravida ac orci. Pellentesque in risus magna.",
        assignees : [USERS[0], USERS[1], USERS[2]],
        status: "IN PROGRESS",
        start_date : new Date(),
        end_date : new Date(2020, 5, 11),
    },
    {   
        id : 3, 
        title : "Webapp - track effort per member displayed",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis libero sit amet purus egestas finibus. Aenean turpis quam, finibus id mattis ut, interdum ut elit. Etiam at dignissim erat. Etiam quis facilisis nulla. Integer posuere risus mollis nibh posuere tristique. Etiam at libero vel risus viverra ornare. In sollicitudin ac libero eu rutrum. Nulla eu facilisis augue, eget aliquam nunc. Duis at eros vel ipsum tincidunt sollicitudin. Vivamus gravida velit justo, sit amet tempor orci lobortis sed. In leo purus, fermentum a scelerisque a, gravida ac orci. Pellentesque in risus magna.",
        assignees : [],
        status: "DONE",
        start_date : new Date(2020,28,10),
        end_date : new Date(2020,29,10),
    }, 
    {   
        id : 4, 
        title : "efactor the rakefile to require tracco only on the tasks that depends on it",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis libero sit amet purus egestas finibus. Aenean turpis quam, finibus id mattis ut, interdum ut elit. Etiam at dignissim erat. Etiam quis facilisis nulla. Integer posuere risus mollis nibh posuere tristique. Etiam at libero vel risus viverra ornare. In sollicitudin ac libero eu rutrum. Nulla eu facilisis augue, eget aliquam nunc. Duis at eros vel ipsum tincidunt sollicitudin. Vivamus gravida velit justo, sit amet tempor orci lobortis sed. In leo purus, fermentum a scelerisque a, gravida ac orci. Pellentesque in risus magna.",
        assignees : [USERS[0]],
        status: "DONE",
        start_date : new Date(2020,28,10),
        end_date : new Date(2020,29,10),
    },
    {   
        id : 5, 
        title : "Webapp - Search for tracked cards",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis libero sit amet purus egestas finibus. Aenean turpis quam, finibus id mattis ut, interdum ut elit. Etiam at dignissim erat. Etiam quis facilisis nulla. Integer posuere risus mollis nibh posuere tristique. Etiam at libero vel risus viverra ornare. In sollicitudin ac libero eu rutrum. Nulla eu facilisis augue, eget aliquam nunc. Duis at eros vel ipsum tincidunt sollicitudin. Vivamus gravida velit justo, sit amet tempor orci lobortis sed. In leo purus, fermentum a scelerisque a, gravida ac orci. Pellentesque in risus magna.",
        assignees : [USERS[1]],
        status: "DONE",
        start_date : new Date(2020,28,10),
        end_date : new Date(2020,29,10),
    },
    {   
        id : 7, 
        title : "Webapp - Refactor to remove business logic in the views",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis libero sit amet purus egestas finibus. Aenean turpis quam, finibus id mattis ut, interdum ut elit. Etiam at dignissim erat. Etiam quis facilisis nulla. Integer posuere risus mollis nibh posuere tristique. Etiam at libero vel risus viverra ornare. In sollicitudin ac libero eu rutrum. Nulla eu facilisis augue, eget aliquam nunc. Duis at eros vel ipsum tincidunt sollicitudin. Vivamus gravida velit justo, sit amet tempor orci lobortis sed. In leo purus, fermentum a scelerisque a, gravida ac orci. Pellentesque in risus magna.",
        assignees : [USERS[2]],
        status: "DONE",
        start_date : new Date(2020,28,10),
        end_date : new Date(2020,29,10),
    }
];
