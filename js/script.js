function calc() {
  // TERMOS IDEPENDENTES
  let indeUM = document.getElementById('inde-1')
  let indeDois = document.getElementById('inde-2')
  let indeTres = document.getElementById('inde-3')
  // MATRIX
  // LINHA 1
  let a11 = document.getElementById('a11')
  let a12 = document.getElementById('a12')
  let a13 = document.getElementById('a13')
  a11 = Number(a11.value)
  a12 = Number(a12.value)
  a13 = Number(a13.value)
  // LINHA 2
  let a21 = document.getElementById('a21')
  let a22 = document.getElementById('a22')
  let a23 = document.getElementById('a23')
  a21 = Number(a21.value)
  a22 = Number(a22.value)
  a23 = Number(a23.value)
  // LINHA 3
  let a31 = document.getElementById('a31')
  let a32 = document.getElementById('a32')
  let a33 = document.getElementById('a33')
  a31 = Number(a31.value)
  a32 = Number(a32.value)
  a33 = Number(a33.value)
  // RESULTADOS
  let resD1 = document.getElementById('res-d-1')
  let resD2 = document.getElementById('res-d-2')
  let resSubD = document.getElementById('res-sub-d')
  // calculo determinante D
  // primeira ordem
  let a11Toa33D = a11 * a22 * a33
  let a12Toa31D = a12 * a23 * a31
  let a13Toa32D = a13 * a21 * a32
  //segunda ordem
  let a31Toa13D = a31 * a22 * a13
  let a32Toa11D = a32 * a23 * a11
  let a33Toa12D = a33 * a21 * a12
  let resultadoDp = a11Toa33D + a12Toa31D + a13Toa32D
  let resultadoDs = a31Toa13D + a32Toa11D + a33Toa12D
  let resultadoD = resultadoDp - resultadoDs
  if (resultadoD == 0) {
    resD1.innerHTML =
      'O resultado do determinante principal é <strong>0</strong>; A conta se encerra.'
    resD2.innerHTML = ''
    resSubD.innerHTML = ''
  } else {
    resD1.innerHTML = `D=(${a11Toa33D} + ${a12Toa31D} + ${a13Toa32D})-(${a31Toa13D} + ${a32Toa11D} + ${a33Toa12D})  `
    resD2.innerHTML = `${resultadoDp} - ${resultadoDs} `
    resSubD.innerHTML = `O determiante principal é = ${resultadoD} `
  }
  // Dterminante X
  let resdx1 = document.getElementById('res-dx-1')
  let resdx2 = document.getElementById('res-dx-2')
  let resSubdx = document.getElementById('res-sub-dx')
  if (
    indeUM.value.length == 0 ||
    indeDois.value.length == 0 ||
    indeTres.value.length == 0
  ) {
    alert('preencha os termos idependentes primeiro')
  } else {
    indeUM = Number(indeUM.value)
    indeDois = Number(indeDois.value)
    indeTres = Number(indeTres.value)
    // primeiro calculo
    let indeUmToa33dx = indeUM * a22 * a33
    let a12ToindeTresdx = a12 * a23 * indeTres
    let a13Toa32dx = a13 * indeDois * a32
    //  segundo calculo
    let indeTresToa13dx = indeTres * a22 * a13
    let a32ToindeUmdx = a32 * a23 * indeUM
    let a33Toa12dx = a33 * indeDois * a12
    let resultadoDpx = indeUmToa33dx + a12ToindeTresdx + a13Toa32dx
    let resultadoDsx = indeTresToa13dx + a32ToindeUmdx + a33Toa12dx
    var resultadoDx = resultadoDpx - resultadoDsx
    //resultado
    resdx1.innerHTML = `Dx=(${indeUmToa33dx} + ${a12ToindeTresdx} + ${a13Toa32dx})-(${indeTresToa13dx} + ${a32ToindeUmdx} + ${a33Toa12dx})  `
    resdx2.innerHTML = `${resultadoDpx} - ${resultadoDsx} `
    resSubdx.innerHTML = `O determiante X é = ${resultadoDx} `
  }
  // Determinante Y
  let resdy1 = document.getElementById('res-dy-1')
  let resdy2 = document.getElementById('res-dy-2')
  let resSubdy = document.getElementById('res-sub-dy')
  // primeiro calculo
  let a11Toa33dy = a11 * indeDois * a33
  let indeUmToa31dy = indeUM * a23 * a31
  let a13ToindeTresdy = a13 * a21 * indeTres
  // segundo calulo
  let a31Toa13 = a31 * indeDois * a13
  let indeTresToa11 = indeTres * a23 * a11
  let a33ToindeUm = a33 * a21 * indeUM
  // terceiro
  let resultadoDpy = a11Toa33dy + indeUmToa31dy + a13ToindeTresdy
  let resultadoDsy = a31Toa13 + indeTresToa11 + a33ToindeUm
  let resultadoDy = resultadoDpy - resultadoDsy
  // resultado
  resdy1.innerHTML = `Dy=(${a11Toa33dy} + ${indeUmToa31dy} + ${a13ToindeTresdy})-(${a31Toa13} + ${indeTresToa11} + ${a33ToindeUm})  `
  resdy2.innerHTML = `${resultadoDpy} - ${resultadoDsy} `
  resSubdy.innerHTML = `O determiante Y é = ${resultadoDy} `

  // Determinante z
  let resdz1 = document.getElementById('res-dz-1')
  let resdz2 = document.getElementById('res-dz-2')
  let resSubdz = document.getElementById('res-sub-dz')
  // primeiro calculo
  let a11ToindeTres = a11 * a22 * indeTres
  let a12Toa31 = a12 * indeDois * a31
  let indeUmToa32 = indeUM * a21 * a32
  // segundo calculo
  let a31ToindeUm = a31 * a22 * indeUM
  let a32Toa11 = a32 * indeDois * a11
  let indeTresToa12 = indeTres * a21 * a12
  // terceiro
  let resultadoDpz = a11ToindeTres + a12Toa31 + indeUmToa32
  let resultadoDsz = a31ToindeUm + a32Toa11 + indeTresToa12
  let resultadoDz = resultadoDpz - resultadoDsz
  // resultado
  resdz1.innerHTML = `Dz=(${a11ToindeTres} + ${a12Toa31} + ${indeUmToa32})-(${a31ToindeUm} + ${a32Toa11} + ${indeTresToa12})  `
  resdz2.innerHTML = `${resultadoDpz} - ${resultadoDsz} `
  resSubdz.innerHTML = `O determiante Z é = ${resultadoDz} `
  // divisão de x
  let resdivX = document.getElementById('res-div-x')
  resdivX.innerHTML = resultadoDx / resultadoD
  // divisão de y
  let resdivY = document.getElementById('res-div-y')
  resdivY.innerHTML = resultadoDy / resultadoD
  // divisão de z
  let resdivZ = document.getElementById('res-div-z')
  resdivZ.innerHTML = resultadoDz / resultadoD
}
const calcular = document.getElementById('calcular')
calcular.addEventListener('click', calc)
