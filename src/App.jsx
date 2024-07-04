
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-100">
        <div class="flex item-center justify-center h-screen">
          <div class="w-full px-4 py-8 mx-auto shadow lg:w-1/3 bg-white">
            <div class="flex item-center mb-6">
              <h1 class="mr-6 text-4xl font-bold text-purple-600">
                to do list
              </h1>
            </div>
            <div class="relative">
              <input type="text" placeholder="what need to do for today??" 
              class="w-full px-2 py-3 border rounded outline-none border-grey-600"
              />
            </div>
            <ul class="list-reset">
              <li class="relative flex item-center justify-between px-2 py-6 border-b">
                <div>
                  <input type="checkbox" />
                  <p class="inline-block mt-1 ml-2 text-grey-600">Tailwind css to do app list 1</p>
                </div>
                <button type="button" class="absolute right-0 flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currenColor" strokeWidth="2">
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
