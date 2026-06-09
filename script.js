function conferir() {
            let data = new Date();
            let ano = data.getFullYear();
            let nasc = window.document.getElementById('nasc');
            let res = window.document.getElementById('res');
            if (Number(nasc.value) == 0 || Number(nasc.value) > ano) {
                window.alert('[ERRO] Verifique os dados e tente novamente!');
            }
            else {
                let sexo = window.document.getElementsByName('radio');
                let idade = ano - Number(nasc.value);
                let gênero = '';
                let img = document.createElement('img');
                img.setAttribute('id', 'foto');
                if (sexo[0].checked) {
                    gênero = 'homem';
                    if (idade >= 0 && idade < 12) {
                        img.src = 'homem-crianca.jpg';
                    }
                    else if (idade >= 12 && idade < 18) {
                        img.src = 'homem-adolescente.jpg';
                    }
                    else if (idade >= 18 && idade < 59) {
                       img.src = 'homem-adulto.jpg';
                    }
                    else {
                        img.src = 'homem-idoso.jpg';
                    }
                }
                else if (sexo[1].checked) {
                    gênero = 'mulher';
                    if (idade >= 0 && idade < 12) {
                        img.src = 'mulher-crianca.jpg';
                    }
                    else if (idade >= 12 && idade < 18) {
                        img.src = 'mulher-adolescente.jpg';
                    }
                    else if (idade >= 18 && idade < 60) {
                       img.src = 'mulher-adulta.jpg';
                    }
                    else {
                       img.src = 'mulher-idosa.jpg';
                    }
                }
                res.innerHTML = `Identificamos ${gênero} com ${idade} anos`;
                res.appendChild(img);
            }
            }