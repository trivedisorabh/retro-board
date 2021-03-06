import { Translation } from './types';
export default {
  Header: {
    subtitle: 'Отличный способ выговориться прилично',
    leave: 'Выйти',
    logout: 'Выйти с учётной записи',
    summaryMode: 'Показать итоги',
  },
  LanguagePicker: {
    header: 'Выбрать язык',
  },
  Main: {
    hint: 'Просто отправьте ссылку, чтобы пригласить на эту рестроспективу',
  },
  Home: {
    welcome: undefined,
  },
  PreviousGame: {
    createdBy: undefined,
    posts: undefined,
    participants: undefined,
    votes: undefined,
    actions: undefined,
  },
  Column: {
    createGroupTooltip: undefined,
  },
  Group: {
    emptyGroupTitle: '',
    emptyGroupContent: '',
  },
  Post: {
    openExtra: undefined,
    closeExtra: undefined,
    vote: 'голос',
    votes: 'голоса',
    deleteButton: 'Удалить',
    setActionButton: undefined,
    setGiphyButton: undefined,
    noContent: '(пусто)',
    by: undefined,
    upVote: undefined,
    downVote: undefined,
    voteRemainingMultiple: undefined,
    voteRemainingOne: undefined,
    voteRemainingNone: undefined,
    toggleGiphyButton: undefined,
  },
  Customize: {
    title: undefined,
    votingCategory: undefined,
    votingCategorySub: undefined,
    postCategory: undefined,
    postCategorySub: undefined,
    customTemplateCategory: undefined,
    customTemplateCategorySub: undefined,
    startButton: undefined,
    maxUpVotes: undefined,
    maxUpVotesHelp: undefined,
    maxDownVotes: undefined,
    maxDownVotesHelp: undefined,
    allowSelfVoting: undefined,
    allowSelfVotingHelp: undefined,
    allowMultipleVotes: undefined,
    allowMultipleVotesHelp: undefined,
    allowActions: undefined,
    allowActionsHelp: undefined,
    allowAuthorVisible: undefined,
    allowAuthorVisibleHelp: undefined,
    allowGiphy: undefined,
    allowGiphyHelp: undefined,
    allowGrouping: undefined,
    allowGroupingHelp: undefined,
    allowReordering: undefined,
    allowReorderingHelp: undefined,
    template: undefined,
    templateHelp: undefined,
    numberOfColumns: undefined,
    numberOfColumnsHelp: undefined,
    makeDefaultTemplate: undefined,
  },
  PostBoard: {
    customQuestion: undefined,
    notWellQuestion: 'Что можно улучшить?',
    wellQuestion: 'Что было хорошего?',
    ideasQuestion: 'Другие хорошие идеи?',
    startQuestion: undefined,
    stopQuestion: undefined,
    continueQuestion: undefined,
    likedQuestion: undefined,
    lackedQuestion: undefined,
    learnedQuestion: undefined,
    longedForQuestion: undefined,
    anchorQuestion: undefined,
    boatQuestion: undefined,
    islandQuestion: undefined,
    windQuestion: undefined,
    rockQuestion: undefined,
    disconnected: undefined,
    reconnect: undefined,
    notLoggedIn: undefined,
  },
  GameMenu: {
    board: 'Записи',
    summary: 'Cводка',
  },
  Template: {
    default: undefined,
    wellNotWell: undefined,
    startStopContinue: undefined,
    fourLs: undefined,
    sailboat: undefined,
  },
  Clients: {
    header: 'Участники:',
  },
  Join: {
    welcome: 'Добро пожаловать в Retrospected',
    standardTab: {
      header: 'Новая ретроспектива',
      text: 'Нажмите, чтобы начать:',
      button: 'Создать новую ретроспективу',
      customizeButton: 'Настроить',
    },
    optionsTab: {
      header: 'Дополнительно',
      input: 'Введите название ретроспективы',
      button: 'Создать ретроспективу',
    },
    previousTab: {
      header: 'История',
      rejoinButton: 'Войти',
    },
  },
  Login: {
    namePlaceholder: 'Как вас зовут? Введите имя',
    buttonLabel: 'Начать',
    header: 'Логин',
    socialMediaAuthHeader: undefined,
    socialMediaAuthDescription: undefined,
    anonymousAuthHeader: undefined,
    anonymousAuthDescription: undefined,
    authenticatingWith: undefined,
    or: undefined,
  },
  SummaryBoard: {
    noPosts: 'Здесь пока пусто',
    copyAsMarkdown: 'Скопировать как Markdown',
    copyAsRichText: 'Скопировать как RTF',
    copySuccessful: 'Копирование завершено',
  },
  SessionName: {
    defaultSessionName: 'Наша ретроспектива',
  },
  Invite: {
    inviteButton: 'Пригласить',
    dialog: {
      title: 'Пригласить на ретроспективу',
      text: 'Чтобы пригласить на ретроспективу, просто отправьте ссылку',
      copyButton: 'Скопировать ссылку',
    },
  },
  Generic: {
    ok: 'OK',
    cancel: 'отменить',
  },
  Actions: {
    tooltip: 'Создать действие на задней части этого элемента',
    label: 'Откройте панель действий',
    summaryTitle: 'Ваши действия',
    title: 'действие',
  },
} as Translation;
