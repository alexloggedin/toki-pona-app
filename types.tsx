export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Lessons: undefined;
  Dictionary: undefined;
  Practice: undefined;
};

export type DictionaryParamList = {
  Dictionary: undefined;
};

export type LessonsParamList = {
  LessonList: undefined;
  Lesson: { LessonId: number };
};
export type PracticeParamList = {
  PracticeMenu: undefined;
  PracticePhrases: {
    exercise: {
      type: string,
      problems: {
        english: string,
        toki: string
      }[]
    }
  };
  PracticeVocab: {
    vocab: {
      entry : {
        id : number,
        form : string
      },
      translations : {
        title : string,
        forms : string[]
      } [],
      tags : [ ],
      contents : [ ],
      variations : [ ],
      relations : [ ]
      }[]
  } 
}

export type PracticeStackParamList = {
  Page: {
      index: number,
      guesses: number[],
      inToki: Boolean[]
      problem: PracticeParamList['PracticePhrases']["exercise"]['problems'][0]  | PracticeParamList['PracticeVocab']['vocab'][0] | undefined;
  },
  Results:{
    index: number,
    guesses: number[],
  }
};