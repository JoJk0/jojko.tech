import type { jsPDFOptions } from 'jspdf'
import { jsPDF } from 'jspdf'
import type { DefineComponent } from 'vue'

export function useJsPdf(options: jsPDFOptions) {
  const htmlEl = ref<HTMLElement | InstanceType<DefineComponent>>()

  const isGenerating = ref(false)

  // eslint-disable-next-line new-cap
  const doc = new jsPDF(options)

  const generatePdf = async () => {
    isGenerating.value = true
    // Object.entries(fonts).forEach(([name, font]) => {
    //   doc.addFileToVFS(font.filename, font.value)
    //   doc.addFont(font.filename, name, 'normal')
    //   doc.setFont(name)
    // })
    if (!htmlEl.value) {
      console.error('[useJsPdf] htmlEl is not defined')
      return
    }

    const el = htmlEl.value instanceof HTMLElement ? htmlEl.value : htmlEl.value.$el ? htmlEl.value.$el as HTMLElement : undefined

    if (!el) {
      console.error('[useJsPdf]: element not found')
      return
    }

    await doc.html(el, {
      fontFaces: [
        // {
        //   family: 'Material Symbols Outlined',
        //   style: 'normal',
        //   weight: 'normal',
        //   src: [
        //     {
        //       url: '/fonts/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].ttf',
        //       format: 'truetype',
        //     },
        //   ],
        // },
        {
          family: 'Quicksand',
          style: 'normal',
          weight: 'normal',
          src: [
            {
              url: '/fonts/quicksand-400.ttf',
              format: 'truetype',
            },
          ],
        },
      ],
    })
    isGenerating.value = false
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

  return [htmlEl, { getPdf, downloadPdf, printPdf, isGenerating }] as const
}
