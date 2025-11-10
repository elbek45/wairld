export default ({ app, $axios }, inject) => {
  inject('entities', {
    getCourse: (id) => {
      return $axios.get('/courses/'+id).then(res => {
        var model = res['data'];
        model.tizer_path = process.env.VUE_APP_API_BASE_URL+'/courses/tizervideo/'+model.id;
        model.lessons = model.lessons.map(lesson => {
          lesson['video_path'] = process.env.VUE_APP_API_BASE_URL+'/get-lesson/video/'+lesson.id;
          lesson['viewed'] = false;
          if(model.customer_course && model.customer_course.lessons && model.customer_course.lessons.length){
            lesson['viewed'] = model.customer_course.lessons.some(item => item.lesson_id == lesson.id);
          }
          return lesson;
        })
        return model;
      })
    },
    getTitle(model){
      var title = "Sinfxona.uz";
      if(model){
        title = model.name;
        title += (" | "+model.category.name);
        title += " | Sinfxona.uz";
      }
      return title;
    },
  })
}