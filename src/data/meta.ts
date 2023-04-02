export enum Power {
  love = 'Tình Yêu',
  work = 'Công Việc',
  study = 'Học Tập',
  family = 'Gia Đình',
}

export enum Gender {
  MALE = 'Nam',
  FEMALE = 'Nữ',
  LGBTQ = 'LGBTQ',
}

export namespace Agenda {
  export enum DaysOfWeek {
    Mon = 'T2',
    Tue = 'T3',
    Wed = 'T4',
    Thur = 'T5',
    Fri = 'T6',
    Sat = 'T7',
    Sun = 'CN',
  }

  export enum StartTime {
    TEN = 10,
    ELEVEN,
    FIFTEEN = 15,
    SIXTEEN,
    SEVENTEEN,
    TWENTY = 20,
  }
}

export const agenda = {
  Mon: [
    { startAt: Agenda.StartTime.TEN, isBooked: false },
    { startAt: 11, isBooked: true },
    { startAt: 15, isBooked: true },
    { startAt: 16, isBooked: false },
  ],
  Tue: [
    { startAt: 15, isBooked: true },
    { startAt: 16, isBooked: false },
    { startAt: 20, isBooked: false },
  ],
  Wed: [
    { startAt: 20, isBooked: true },
    { startAt: 21, isBooked: false },
  ],
  Thur: [
    { startAt: 15, isBooked: true },
    { startAt: 16, isBooked: false },
    { startAt: 17, isBooked: false },
    { startAt: 20, isBooked: false },
    { startAt: 20, isBooked: false },
    { startAt: 20, isBooked: false },
  ],
  Fri: [
    { startAt: 10, isBooked: false },
    { startAt: 20, isBooked: false },
  ],
  Sat: [
    { startAt: 10, isBooked: false },
    { startAt: 15, isBooked: true },
    { startAt: 16, isBooked: false },
    { startAt: 20, isBooked: false },
  ],
  Sun: [
    { startAt: 10, isBooked: false },
    { startAt: 15, isBooked: true },
    { startAt: 16, isBooked: false },
    { startAt: 20, isBooked: false },
  ],
};
