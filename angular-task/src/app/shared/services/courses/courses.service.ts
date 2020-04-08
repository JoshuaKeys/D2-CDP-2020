import { Injectable } from "@angular/core";
import { CourseModel } from '../../models/course.model';
import { Observable, of } from 'rxjs';

const courses: Array<CourseModel> = [
  {
    "id": "zxhzzhretn",
    "title": "Become a Representative",
    "creationDate": "2019-09-24",
    "duration": 100,
    "description": "maiores sint mollitia praesentium sint ea qui sed facilis sint quidem in aliquid nobis quia ut voluptatem velit rerum debitis sit iusto ad iusto accusantium tempora necessitatibus dolores animi placeat voluptates nam cumque odio dolores corrupti repellat quis sint at id ex excepturi eos impedit et architecto perferendis ea quis"
  },
  {
    "id": "dr98h4kvbx",
    "title": "Become a Orchestrator",
    "creationDate": "2019-10-18",
    "duration": 96,
    "description": "reiciendis blanditiis et molestiae est omnis ab fugiat sint quos vel dolorem qui officia sed ut ut et quis doloribus nihil nesciunt voluptatem ipsum voluptatem repellendus iste ratione laboriosam quia accusamus qui quae iusto ipsa ut sint labore soluta aut repellat velit excepturi aut explicabo saepe officia neque nisi at"
  },
  {
    "id": "vgz2sd83ew",
    "title": "Become a Coordinator",
    "creationDate": "2019-03-22",
    "duration": 284,
    "description": "inventore doloribus alias accusantium iste rem occaecati eveniet accusamus facilis aliquam molestias quo illum magnam omnis voluptatem non consequatur inventore ut voluptatem soluta repellendus doloribus vel est rem libero vel ullam vel vero inventore tempore et quam sit eligendi illo veritatis numquam qui ut vel perspiciatis et cum asperiores ipsam"
  },
  {
    "id": "5fuepyjurj",
    "title": "Become a Administrator",
    "creationDate": "2019-09-02",
    "duration": 129,
    "description": "ullam enim temporibus repudiandae voluptas consequatur vero sint dolor fugiat sunt inventore tempore assumenda quas modi sit ut sed nobis voluptatem est cum magni quaerat rerum dolor aut enim rerum assumenda sed quasi labore quis qui incidunt odio temporibus expedita laborum non reprehenderit aut dolorum aut accusamus et aut iusto"
  },
  {
    "id": "uc3zgvfabb",
    "title": "Become a Architect",
    "creationDate": "2019-12-26",
    "duration": 228,
    "description": "quibusdam eos facilis error consequatur doloremque ex saepe nemo voluptates aspernatur dolorum autem totam doloremque vitae aperiam possimus debitis dolorem illum perspiciatis et totam doloremque autem inventore quasi unde nemo eveniet quidem maxime alias quis aut maxime voluptas nisi sint ab nulla et est pariatur et esse rerum accusantium repudiandae"
  },
  {
    "id": "ybfwqysca3",
    "title": "Become a Technician",
    "creationDate": "2019-08-04",
    "duration": 86,
    "description": "nesciunt eius sint assumenda et nostrum necessitatibus laudantium aliquam autem quia vel qui placeat minus quidem id dolorum sed numquam sapiente autem totam eum nisi sint nihil itaque ipsa possimus perspiciatis quasi error aliquid illum aut dolores rem amet magni ut enim enim ut rerum tempore perspiciatis vero sequi necessitatibus"
  },
  {
    "id": "fzykpy7qvt",
    "title": "Become a Consultant",
    "creationDate": "2019-03-02",
    "duration": 299,
    "description": "a commodi sed unde nisi nobis consequuntur est harum et omnis accusamus quaerat atque optio quia ut dolor autem nisi ab et ab sunt modi natus qui ex non at odio et autem et quis commodi rerum quis voluptas et saepe aut reiciendis officia veniam quia accusantium quibusdam voluptatem sit"
  },
  {
    "id": "t9o26g1hsw",
    "title": "Become a Engineer",
    "creationDate": "2020-01-13",
    "duration": 149,
    "description": "quia molestiae iste sed voluptatem incidunt ut maiores quis pariatur est rerum repudiandae qui est est rerum molestiae nulla consequuntur et magni voluptatibus ad non quod numquam dignissimos ullam odio quibusdam cupiditate quam doloremque saepe molestiae qui eligendi et est ut ipsam quia facilis maxime velit numquam reprehenderit optio quidem"
  },
  {
    "id": "wx799i4cob",
    "title": "Become a Manager",
    "creationDate": "2019-10-09",
    "duration": 51,
    "description": "et qui quo harum quisquam excepturi commodi libero ratione doloremque eum qui molestias et et repudiandae dolores ad autem expedita in illo suscipit voluptates qui et sit tempora in blanditiis assumenda cumque sit id quia possimus nulla qui quidem vel soluta accusantium nobis ad velit ullam provident alias voluptas at"
  },
  {
    "id": "6ie4peirs4",
    "title": "Become a Director",
    "creationDate": "2019-09-15",
    "duration": 267,
    "description": "accusantium aut omnis illum ut explicabo nihil nisi esse aut ipsam omnis dolorem quidem minima rem est quisquam est quos est magni minus in officia eius fugit aut quia soluta numquam deleniti consequuntur veritatis et voluptatum laborum saepe ea quibusdam eligendi eius temporibus odio accusantium nulla dolor ipsum consequatur consectetur"
  },
  {
    "id": "a7cl47wfgd",
    "title": "Become a Agent",
    "creationDate": "2019-04-15",
    "duration": 218,
    "description": "rerum vel fugiat explicabo est recusandae reiciendis cumque vitae quaerat at qui excepturi nihil possimus et quas velit rerum ratione tenetur quo adipisci rerum nulla nihil ullam autem eligendi nesciunt ea qui nemo odio sapiente animi tempora possimus iste eaque dolorem recusandae quisquam amet provident assumenda dolores natus quo consectetur"
  }
];


@Injectable()
export class CoursesService {
  getCourses(): Observable<CourseModel[]> {
    return of(courses);
  }
}
