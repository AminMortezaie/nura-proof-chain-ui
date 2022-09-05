import React from "react";

const Home = () => {
    return (
        <div class="w-full bg-gray-100 mx-auto max-w-6xl py-24 px-12 lg:px-24 shadow-xl mb-24">
            <form>
                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/4 px-3 mb-6 md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                                Trade Number
                            </label>
                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="trade-num" type="text" placeholder="Ex: 1234" />
                        </div>
                        <div class="md:w-1/4 px-3">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                Daily Number
                            </label>
                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="daily-num" type="text" placeholder="Ex: 123" />
                        </div>
                        <div class="md:w-1/4 px-3">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                Date
                            </label>
                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Ex: 01/01/01" />
                        </div>
                        <div class="md:w-1/4 px-3">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                Time
                            </label>
                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Ex: 00:00" />
                        </div>
                    </div>
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/4 px-3 mb-6 md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="exchange">
                                Exchange
                            </label>
                            {/* <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="exchange" type="text" placeholder="Exchange" /> */}
                            <div>
                                <select class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="exchange">
                                    <option>Binance</option>
                                </select>
                            </div>
                        </div>
                        <div class="md:w-1/4 px-3">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                Call Type
                            </label>
                            {/* <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="call-type" type="text" placeholder="Call Type" /> */}
                            <div>
                                <select class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="call-type">
                                    <option>Buy(Long)</option>
                                    <option>Sell(Short)</option>
                                </select>
                            </div>
                        </div>
                        <div class="md:w-1/4 px-3">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                Trade Type
                            </label>
                            {/* <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="trade-type" type="text" placeholder="Trade Type" /> */}
                            <div>
                                <select class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="trade-type">
                                    <option>Swing</option>
                                    <option>Intraday</option>
                                    <option>Long Swing</option>
                                </select>
                            </div>
                        </div>
                        <div class="md:w-1/4 px-3">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                Pair
                            </label>
                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="pair" type="text" placeholder="Pair" />
                        </div>
                    </div>
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/4 px-3 mb-6 md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                                First Entry Price
                            </label>
                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="entry1" type="text" placeholder="First Entry Price" />
                        </div>
                        <div class="md:w-1/4 px-3">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                Second Entry Price
                            </label>
                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="entry2" type="text" placeholder="Second Entry Price" />
                        </div>
                        <div class="md:w-1/4 px-3">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                Target Price
                            </label>
                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="target" type="text" placeholder="Target Price" />
                        </div>
                        <div class="md:w-1/4 px-3">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                Stop Loss
                            </label>
                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="stop" type="text" placeholder="Stop Loss" />
                        </div>
                    </div>
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/4 px-3 mb-6 md:mb-0">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                                Leverage
                            </label>
                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="leverage" type="text" placeholder="Leverage" />
                        </div>
                        <div class="md:w-1/4 px-3">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                Base Candle Time
                            </label>
                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="candle-time" type="text" placeholder="Base Candle Time" />
                        </div>
                        <div class="md:w-1/4 px-3">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                Source
                            </label>
                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="source" type="text" placeholder="Source" />
                        </div>
                        <div class="md:w-1/4 px-3">
                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                Status
                            </label>
                            {/* <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="status" type="text" placeholder="Status" /> */}
                            <div>
                                <select class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="status">
                                <option>4 Confirmed</option>
                                <option>3 Confirmed</option>
                                <option>2 Confirmed</option>
                                <option>1 Confirmed</option>
                                <option>0 Confirmed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <div class="-mx-3 md:flex mb-6">
                            <div class="md:w-full px-3">
                                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="application-link">
                                    Application Link*
                                </label>
                                <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="http://...." />
                            </div>
                        </div>
                        <div class="-mx-3 md:flex mb-2">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="location">
                                    Location*
                                </label>
                                <div>
                                    <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                                        <option>Abuja</option>
                                        <option>Enugu</option>
                                        <option>Lagos</option>
                                    </select>
                                </div>
                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="job-type">
                                    Job Type*
                                </label>
                                <div>
                                    <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
                                        <option>Full-Time</option>
                                        <option>Part-Time</option>
                                        <option>Internship</option>
                                    </select>
                                </div>
                            </div>
                            <div class="md:w-1/2 px-3">
                                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="department">
                                    Department*
                                </label>
                                <div>
                                    <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department">
                                        <option>Engineering</option>
                                        <option>Design</option>
                                        <option>Customer Support</option>
                                    </select>
                                </div>
                            </div>
                        </div> */}
                    <div class="-mx-3 md:flex mt-2">
                        <div class="md:w-full px-3">
                            <button class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>);
};

export default Home;