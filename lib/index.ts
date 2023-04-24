#!/usr/bin/env ts-node

import path from 'path'
import fs from 'fs'
import Papa from 'papaparse'

const WORKING_DIRECTORY = process.cwd()

const directoryPath = path.join(WORKING_DIRECTORY, 'files')

const resultBank: string[] = []

fs.readdir(directoryPath, function (err, files) {
  if (err) return console.log('Unable to scan directory: ', err)

  files.forEach((file, index) => {
    const fileInput = fs.readFileSync(path.join(directoryPath, file), 'utf8')
    Papa.parse<string>(fileInput, {
      complete: result => {
        if (index === 0) {
          // We use the first file in its entirety so we can get the headers
          resultBank.push(...result.data)
        } else {
          // Here we have no headers, we're slicing the remainder of the data
          resultBank.push(...result.data.slice(1))
        }
      },
    })
  })

  console.log(` >>> Parsing Complete: ${resultBank.length - 1} rows merged`)

  fs.writeFileSync(
    path.join(WORKING_DIRECTORY, 'merged-results.csv'),
    Papa.unparse(resultBank),
    'utf8',
  )
})
