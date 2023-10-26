<div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Teléfono de contacto:
                </label>
                <br/>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Cód. País
                </label>
                <div className="mt-2">
              <input
                type="number"
                name="countryCode"
                value={phone.countryCode}
                onChange={handleChange}
                placeholder="+57"
                autoComplete="countryCode"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Característica
              </label>
              <div className="mt-2">
              <input
                type="number"
                name="areaCode"
                value={phone.areaCode}
                onChange={handleChange}
                placeholder="314"
                autoComplete="areaCode"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
 
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Número
                </label>
                <div className="mt-2">
              <input
                type="number"
                name="phoneNumber"
                value={phone.phoneNumber}
                onChange={handleChange}
                placeholder="2299661"
                autoComplete="phoneNumber"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
               </div>
              </div>