function resolvePromise(prms, promiseState){
    promiseState.promise = prms;
    promiseState.data = null;
    promiseState.error = null;

    if(prms !== null){
        prms.then(dataACB).catch(errorACB);
    }

    function dataACB(data){
        if(promiseState.promise === prms){
            promiseState.data = data;
            return promiseState.data;
        }
    }

    function errorACB(error){
        if(promiseState.promise === prms){
            promiseState.error = error;
            return promiseState.error
        }
    }
}

export default resolvePromise