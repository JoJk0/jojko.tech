import { jsPDF } from 'jspdf'

export const useJsPdf = () => {
  const htmlEl = ref<HTMLElement>()

  // eslint-disable-next-line new-cap
  const doc = new jsPDF({
    orientation: 'l',
    unit: 'pt',
    format: 'a4',
  })

  const generatePdf = async () => {
    if (!htmlEl.value) {
      console.error('[useJsPdf] htmlEl is not defined')
      return
    }

    await doc.html(htmlEl.value)
  }

  const downloadPdf = async (filename: string) => {
    await generatePdf()
    doc.save(filename)
  }

  const getPdf = async (filename: string) => {
    await generatePdf()
    const blob = doc.output('blob')
    return new File([blob], filename, { type: 'application/pdf' })
  }

  const printPdf = async () => {
    await generatePdf()
    doc.autoPrint()
    doc.output('dataurlnewwindow')
  }

  onMounted(() => {
    if (!htmlEl.value)
      console.error('[useJsPdf] htmlEl is not defined')
  })

  return [htmlEl, { getPdf, downloadPdf, printPdf }] as const
}
