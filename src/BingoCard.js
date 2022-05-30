function BingoCard(){
    this.matrix = [];
    /**
     * funcion en la cual crearemos las tablas y los randond de cada rango para las letras del bingo
     * @returns {[]}
     */
    this.generateMatrix = () =>{
        let b = [];
        let i = [];
        let n = [];
        let g = [];
        let o = [];

        /**
         * randon para crear la balota de la columna B
         */
        for (let a = 0; a < 5; a++){
            b[a] = Math.floor(Math.random() * (15 -1)+1);
        }
        for (let outer = 0; outer < b.length; outer ++){
            for (let inner = 0; inner < b.length; inner++){
                if (inner != outer && b[outer] == b[inner]){
                    b[outer] = Math.floor(Math.random()*(15-1)+1);
                }
            }
        }
        this.matrix.push(b);
        /**
         * randon para crear la balota de la columna I
         */
        for (let a=0; a<5;a++){
            i[a]= Math.floor(Math.random()*(30-16)+16);
        }

        for (let outer=0; outer < i.length; outer++){
            for (let inner =0; inner < b.length; inner++){
                if (inner != outer && i[outer] == i[inner]){
                    i[inner] = Math.floor(Math.random()*(30-16)+16);
                }
            }
        }
        this.matrix.push(i);
        /**
         * randon para crear la balota de la columna N
         */
        for (let a=0; a< 5; a++){
            n[a] = Math.floor(Math.random()*(45-31)+31);
        }
        for (let outer=0; outer <n.length; outer++){
            for (let inner =0; inner < b.length; inner++){
                if (inner != outer && n[outer] == n[inner]){
                    n[outer]= Math.floor(Math.random()*(45-31)+31);
                }
            }
        }
        this.matrix.push(n);
        /**
         * randon para crear la balota de la columna G
         */
        for (let a =0; a<5; a++){
            g[a]= Math.floor(Math.random()*(60-46)+46);
        }
        for (let outer = 0; outer <g.length; outer++){
            for (let inner=0; inner <g.length; inner++){
                if (inner != outer && g[outer]== g[inner]){
                    g[outer]= Math.floor(Math.random()*(60-46)+46);
                }
            }
        }
        this.matrix.push(g);
        /**
         * randon para crear la balota de la columna O
         */
        for (let a=0;a<5;a++){
            o[a]= Math.floor(Math.random()*(75-61)+61);

        }
        for (let outer =0; outer <g.length; outer++){
          for (let inner=0; inner <o.length; inner++){
              if (inner != outer && o[outer]== o[inner]){
                  o[outer] = Math.floor(Math.random()*(75-61)+61);
              }
          }
        }
        this.matrix.push(o);
        return this.matrix;
    }
    /**
     * funcion donde estaremos creando o mas bien pintando las tablas del baloto
     * @returns {JSX.Element}
     */
    this.drawCard = () =>{

        return <div>
            <table>
                <tr>
                    <th>B</th>
                    <th>I</th>
                    <th>N</th>
                    <th>G</th>
                    <th>O</th>
                </tr>
                <tr>
                    <td id ="${this.matrix[0][0]}">${this.matrix[0][0]}</td>
                    <td id ="${this.matrix[1][0]}">${this.matrix[1][0]}</td>
                    <td id ="${this.matrix[2][0]}">${this.matrix[2][0]}</td>
                    <td id ="${this.matrix[3][0]}">${this.matrix[3][0]}</td>
                    <td id ="${this.matrix[4][0]}">${this.matrix[4][0]}</td>
                </tr>
                <tr>
                    <td id ="${this.matrix[0][1]}">${this.matrix[0][1]}</td>
                    <td id ="${this.matrix[1][1]}">${this.matrix[1][1]}</td>
                    <td id ="${this.matrix[2][1]}">${this.matrix[2][1]}</td>
                    <td id ="${this.matrix[3][1]}">${this.matrix[3][1]}</td>
                    <td id ="${this.matrix[4][1]}">${this.matrix[4][1]}</td>
                </tr>
                <tr>
                    <td id ="${this.matrix[0][2]}">${this.matrix[0][2]}</td>
                    <td id ="${this.matrix[1][2]}">${this.matrix[1][2]}</td>
                    <td id ="${this.matrix[2][2]}" style="background:red;><p id="free>FREE</td>
                    <td id ="${this.matrix[3][2]}">${this.matrix[3][2]}</td>
                    <td id ="${this.matrix[4][2]}">${this.matrix[4][2]}</td>
                </tr>
                <tr>
                    <td id ="${this.matrix[0][3]}">${this.matrix[0][3]}</td>
                    <td id ="${this.matrix[1][3]}">${this.matrix[1][3]}</td>
                    <td id ="${this.matrix[2][3]}">${this.matrix[2][3]}</td>
                    <td id ="${this.matrix[3][3]}">${this.matrix[3][3]}</td>
                    <td id ="${this.matrix[4][3]}">${this.matrix[4][3]}</td>
                </tr>
                <tr>
                    <td id ="${this.matrix[0][4]}">${this.matrix[0][4]}</td>
                    <td id ="${this.matrix[1][4]}">${this.matrix[1][4]}</td>
                    <td id ="${this.matrix[2][4]}">${this.matrix[2][4]}</td>
                    <td id ="${this.matrix[3][4]}">${this.matrix[3][4]}</td>
                    <td id ="${this.matrix[4][4]}">${this.matrix[4][4]}</td>
                </tr>
            </table>

        </div>


    }

}
