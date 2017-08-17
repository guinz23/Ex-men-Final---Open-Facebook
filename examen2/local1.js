window.onload = function () {
          var usuarioentra = "maria";
            var localStorageKeyName = 'data';

               loadFromLocalStorage();

            document.querySelector("#btn-add").addEventListener('click', function () {
                var name = document.getElementById("name"),
                    job = document.getElementById("job");


                  alert('registrando' + name.value  );

                // Validate
                if (name.value.length === 0 || job.value.length === 0 ) return;

                var user = {
                    name: name.value,
                    job: job.value

                };

                // Clean data
                name.value = '';
                job.value = '';


                // Append to my localStorage
                appendObjectToLocalStorage(user);
            })

            function appendObjectToLocalStorage(obj) {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                if (dataInLocalStorage !== null) {
                    users = JSON.parse(dataInLocalStorage);
                }

                users.push(obj);

                localStorage.setItem(localStorageKeyName, JSON.stringify(users));

                loadFromLocalStorage();
            }

            function loadFromLocalStorage() {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName),
                    gridBody = document.querySelector("#grid tbody");

                if (dataInLocalStorage !== null) {
                    users = JSON.parse(dataInLocalStorage);
                }

                // Draw TR from TBODY
                gridBody.innerHTML = '';

                users.forEach(function (x, i) {
                    var tr = document.createElement("tr"),
                        tdName = document.createElement("td"),
                        tdJob = document.createElement("td"),

                        tdRemove = document.createElement("td"),
                        btnRemove = document.createElement("button");

                    tdName.innerHTML = x.name;
                    tdJob.innerHTML = x.job;


                    btnRemove.textContent = 'Remove';
                    btnRemove.className = 'btn btn-xs btn-danger';
                    btnRemove.addEventListener('click', function(){
                        removeFromLocalStorage(i);
                    });

                    tdRemove.appendChild(btnRemove);

                    tr.appendChild(tdName);
                    tr.appendChild(tdJob);

                    tr.appendChild(tdRemove);

                    gridBody.appendChild(tr);
                });
            }

            function removeFromLocalStorage(index){

            if(usuarioentra == document.getElementById("name").value){

              var users = [],
                  dataInLocalStorage = localStorage.getItem(localStorageKeyName);

              users = JSON.parse(dataInLocalStorage);

              users.splice(index, 1);

              localStorage.setItem(localStorageKeyName, JSON.stringify(users));

              loadFromLocalStorage();


            }else{


              alert("no tiene permiso de borrar");
            }

          }
      }
