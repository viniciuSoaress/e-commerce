export function formt(num: number){
  return new Intl.NumberFormat('pt-br', {
   style: 'currency',
   currency: 'BRL',
  }).format(num)
 }