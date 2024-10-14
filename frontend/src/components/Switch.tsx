interface Props {
  switchMode: () => void
}

const Switch = ({ switchMode }: Props) => {
  return (
    <label className="inline-flex items-center cursor-pointer m-2 absolute top-0 right-0">
      <input type="checkbox" value="" className="sr-only peer m-1" onChange={switchMode}></input>
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-700"></div>
      <span className="m-1 ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
    </label>
  )
}

export default Switch
