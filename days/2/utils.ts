export function calculateSafeReports(reports: number[][]) {
  return reports.reduce((acc, report) => {
    console.log(report, isSafeReport(report), isSafeReportTolerant(report))
    return acc + (isSafeReport(report) || isSafeReportTolerant(report) ? 1 : 0)
  }, 0)
}

function isSafeReport(report: number[]) {
  return (
    isOrdered(report) &&
    report.every(
      (num, i) =>
        i === 0 ||
        differenceGreaterThan(
          num,
          report[i - 1],
          (diff) => diff >= 1 && diff <= 3
        )
    )
  )
}

function isSafeReportTolerant(report: number[]) {
  let passingCount = 0

  for (let i = 0; i < report.length; i++) {
    const newReport = report.filter((_, j) => j !== i)
    if (isSafeReport(newReport)) passingCount += 1
  }

  return passingCount > 0
}

function isOrdered(report: number[]) {
  const isAscending = report.every((num, i) => i === 0 || num > report[i - 1])
  const isDescending = report.every((num, i) => i === 0 || num < report[i - 1])

  return isAscending || isDescending
}

function differenceGreaterThan(
  x: number,
  y: number,
  diff: number | ((num: number) => boolean)
) {
  return typeof diff === 'number'
    ? Math.abs(x - y) > diff
    : diff(Math.abs(x - y))
}
