enum ElementType {
  Alkaiczne = '#C60042',
  ZiemAlkaicznych = '#EE7422',
  Metale = '#EAAA2E',
  MetalePost = '#59A253',
  Polmetale = '#26897E',
  Niemetal = '#009DC4',
  Halogeny = '#0077CC',
  Szlachetne = '#c6cbcc',
  Lantanowce = '#C96A96',
  Aktynowce = '#99728F',

  Nieznane = '#7c888c',
}

interface _Atom {
  name: string
  Z: number
  length?: number
  type?: ElementType
}

export class Break implements _Atom {
  name: string
  Z: number
  length: number

  constructor(z: number, _length: number) {
    this.name = ''
    this.Z = z
    this.length = _length
  }
}

class Atom implements _Atom {
  name: string
  Z: number
  type: ElementType

  constructor(_name: string, z: number) {
    this.name = _name
    this.Z = z
    this.type = ElementType.Nieznane

    if ([1, 6, 7, 8, 15, 16, 34].indexOf(z) !== -1) {
      this.type = ElementType.Niemetal
    }

    if ([5, 14, 32, 33, 51, 52, 84].indexOf(z) !== -1) {
      this.type = ElementType.Polmetale
    }

    if ([13, 31, 49, 50, 81, 82, 83].indexOf(z) !== -1) {
      this.type = ElementType.MetalePost
    }

    if ([9, 17, 35, 53, 85].indexOf(z) !== -1) {
      this.type = ElementType.Halogeny
    }

    if ([2, 10, 18, 36, 54, 86].indexOf(z) !== -1) {
      this.type = ElementType.Szlachetne
    }

    if ([3, 11, 19, 37, 55, 87].indexOf(z) !== -1) {
      this.type = ElementType.Alkaiczne
    }

    if ([4, 12, 20, 38, 56, 88].indexOf(z) !== -1) {
      this.type = ElementType.ZiemAlkaicznych
    }

    if (
      this.B(21, 30) ||
      this.B(39, 48) ||
      this.B(72, 80) ||
      this.B(104, 109)
    ) {
      this.type = ElementType.Metale
    }

    if (this.B(57, 71)) {
      this.type = ElementType.Lantanowce
    }

    if (this.B(89, 103)) {
      this.type = ElementType.Aktynowce
    }
  }

  B(a: number, b: number) {
    return this.Z >= a && this.Z <= b
  }
}

export default [
  new Atom('H', 1),
  new Break(1.5, 16),
  new Atom('He', 2), //

  new Atom('Li', 3),
  new Atom('Be', 4),
  new Break(4.5, 10),
  new Atom('B', 5),
  new Atom('C', 6),
  new Atom('N', 7),
  new Atom('O', 8),
  new Atom('F', 9),
  new Atom('Ne', 10), //

  new Atom('Na', 11),
  new Atom('Mg', 12),
  new Break(12.5, 10),
  new Atom('Al', 13),
  new Atom('Si', 14),
  new Atom('P', 15),
  new Atom('S', 16),
  new Atom('Cl', 17),
  new Atom('Ar', 18), //

  new Atom('K', 19),
  new Atom('Ca', 20),
  new Atom('Sc', 21),
  new Atom('Ti', 22),
  new Atom('V', 23),
  new Atom('Cr', 24),
  new Atom('Mn', 25),
  new Atom('Fe', 26),
  new Atom('Co', 27),
  new Atom('Ni', 28),
  new Atom('Cu', 29),
  new Atom('Zn', 30),
  new Atom('Ga', 31),
  new Atom('Ge', 32),
  new Atom('As', 33),
  new Atom('Se', 34),
  new Atom('Br', 35),
  new Atom('Kr', 36), //

  new Atom('Rb', 37),
  new Atom('Sr', 38),
  new Atom('Y', 39),
  new Atom('Zr', 40),
  new Atom('Nb', 41),
  new Atom('Mo', 42),
  new Atom('Tc', 43),
  new Atom('Ru', 44),
  new Atom('Rh', 45),
  new Atom('Pd', 46),
  new Atom('Ag', 47),
  new Atom('Cd', 48),
  new Atom('In', 49),
  new Atom('Sn', 50),
  new Atom('Sb', 51),
  new Atom('Te', 52),
  new Atom('I', 53),
  new Atom('Xe', 54), //

  new Atom('Sc', 55),
  new Atom('Ba', 56),
  new Break(56.5, 1),
  new Atom('Hf', 72),
  new Atom('Ta', 73),
  new Atom('W', 74),
  new Atom('Re', 75),
  new Atom('Os', 76),
  new Atom('Ir', 77),
  new Atom('Pt', 78),
  new Atom('Au', 79),
  new Atom('Hg', 80),
  new Atom('Tl', 81),
  new Atom('Pb', 82),
  new Atom('Bi', 83),
  new Atom('Po', 84),
  new Atom('At', 85),
  new Atom('Rn', 86), //

  new Atom('Fr', 87),
  new Atom('Ra', 88),
  new Break(88.5, 1),
  new Atom('Rf', 104),
  new Atom('Db', 105),
  new Atom('Sg', 106),
  new Atom('Bh', 107),
  new Atom('Hs', 108),
  new Atom('Mt', 109),
  new Atom('Ds', 110),
  new Atom('Rg', 111),
  new Atom('Cn', 112),
  new Atom('Nh', 113),
  new Atom('Fl', 114),
  new Atom('Mc', 115),
  new Atom('Lv', 116),
  new Atom('Ts', 117),
  new Atom('Og', 118), //
] as Atom[]

export const lantan: Atom[] = [
  new Atom('La', 57),
  new Atom('Ce', 58),
  new Atom('Pr', 59),
  new Atom('Nd', 60),
  new Atom('Pm', 61),
  new Atom('Sm', 62),
  new Atom('Eu', 63),
  new Atom('Gd', 64),
  new Atom('Tb', 65),
  new Atom('Dy', 66),
  new Atom('Ho', 67),
  new Atom('Er', 68),
  new Atom('Tm', 69),
  new Atom('Yb', 70),
  new Atom('Lu', 71),
]

export const aktyn: Atom[] = [
  new Atom('Ac', 89),
  new Atom('Th', 90),
  new Atom('Pa', 91),
  new Atom('U', 92),
  new Atom('Np', 93),
  new Atom('Pu', 94),
  new Atom('Am', 95),
  new Atom('Cm', 96),
  new Atom('Bk', 97),
  new Atom('Cf', 98),
  new Atom('Es', 99),
  new Atom('Fm', 100),
  new Atom('Md', 101),
  new Atom('No', 102),
  new Atom('Lr', 103),
]
