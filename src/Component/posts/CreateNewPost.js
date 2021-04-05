import React from 'react'

function CreateNewPost() {
    return (
        <section className="create-post">
        <h2>Add New Post</h2>
        <form >
          <label>Blog title :</label>
          <input
            type="text"
            required
      
          />
          <label>Blog Image :</label>
          <input
            type="url"
            required
     
          />
          <label>Blog body :</label>
          <textarea
            required
            rows="5"
           
          ></textarea>
          <label>Blog author :</label>
          <select >
            <option value="admin">admin</option>
            <option value="codv">code nader</option>
          </select>
          <button className="btn" type="submit">
            Add Blog
          </button>
        </form>
      </section>
    )
}

export default CreateNewPost
