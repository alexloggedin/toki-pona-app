export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Lessons: undefined;
  Dictionary: undefined;
};

export type DictionaryParamList = {
  Dictionary: undefined;
};

export type LessonsParamList = {
  LessonList: undefined;
  Lesson: {LessonId: number};
};
 export type PracticeParamList = {
   PracticeMenu : undefined;
   Practice: {LessonId: number}
 }