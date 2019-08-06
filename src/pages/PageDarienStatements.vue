<template>
  <q-page>
    <my-page-container>
      <h3>The Darien Statements on the Library and Librarians</h3>

      <div class="ds-byline">
        <h5>Written by John Blyberg, Kathryn Greenhill, and Cindi Trainor</h5>
        <p class="text-italic">4/3/2009</p>
      </div>

      <div>
        <div class="ds-section">
          <h5>The Purpose of the Library</h5>
          <p>
            The purpose of the Library is to preserve the integrity of
            civilization.
          </p>

          <p>
            The Library has a moral obligation to adhere to its purpose despite
            social, economic, environmental, or political influences. The
            purpose of the Library will never change.
          </p>

          <p>
            The Library is infinite in its capacity to contain, connect and
            disseminate knowledge; librarians are human and ephemeral, therefore
            we must work together to ensure the Library’s permanence.
          </p>

          <p>
            Individual libraries serve the mission of their parent institution
            or governing body, but the purpose of the Library overrides that
            mission when the two come into conflict.
          </p>

          <p>Why we do things will not change, but how we do them will.</p>

          <p>
            A clear understanding of the Library’s purpose, its role, and the
            role of librarians is essential to the preservation of the Library.
          </p>
        </div>

        <div class="ds-section">
          <h5>The Role of the Library</h5>
          <h6>The Library:</h6>

          <ul>
            <li>Provides the opportunity for personal enlightenment.</li>
            <li>Encourages the love of learning.</li>
            <li>Empowers people to fulfill their civic duty.</li>
            <li>Facilitates human connections.</li>
            <li>Preserves and provides materials.</li>
            <li>Expands capacity for creative expression.</li>
            <li>Inspires and perpetuates hope.</li>
          </ul>
        </div>

        <div class="ds-section">
          <h5>The Role of Librarians</h5>
          <h6>Librarians:</h6>

          <ul>
            <li>Are stewards of the Library.</li>
            <li>Connect people with accurate information.</li>
            <li>
              Assist people in the creation of their human and information
              networks.
            </li>
            <li>Select, organize and facilitate creation of content.</li>
            <li>
              Protect access to content and preserve freedom of information and
              expression.
            </li>
            <li>
              Anticipate, identify and meet the needs of the Library’s
              community.
            </li>
          </ul>
        </div>

        <div class="ds-section">
          <h5>The Preservation of the Library</h5>
          <p>
            Our methods need to rapidly change to address the profound impact of
            information technology on the nature of human connection and the
            transmission and consumption of knowledge.
          </p>

          <p>
            If the Library is to fulfill its purpose in the future, librarians
            must commit to a culture of continuous operational change, accept
            risk and uncertainty as key properties of the profession, and uphold
            service to the user as our most valuable directive.
          </p>

          <h6>As librarians, we must:</h6>

          <ul>
            <li>
              Promote openness, kindness, and transparency among libraries and
              users.
            </li>
            <li>
              Eliminate barriers to cooperation between the Library and any
              person, institution, or entity within or outside the Library.
            </li>
            <li>Choose wisely what to stop doing.</li>
            <li>
              Preserve and foster the connections between users and the Library.
            </li>
            <li>
              Harness distributed expertise to serve the needs of the local and
              global community.
            </li>
            <li>
              Help individuals to learn and to use new tools to create a more
              robust path to knowledge.
            </li>
            <li>
              Engage in activism on behalf of the Library if its integrity is
              externally threatened.
            </li>
            <li>
              Endorse procedures only if they guide librarians or users to
              excellence.
            </li>
            <li>
              Identify and implement the most humane and efficient methods,
              tools, standards and practices.
            </li>
            <li>
              Adopt technology that keeps data open and free, abandon technology
              that does not.
            </li>
            <li>
              Be willing and have the expertise to make frequent radical
              changes.
            </li>
            <li>
              Hire the best people and let them do their job; remove staff who
              cannot or will not.
            </li>
            <li>Trust each other and trust the users.</li>
          </ul>

          <p>
            We have faith that the citizens of our communities will continue to
            fulfill their civic responsibility by preserving the Library.
          </p>
        </div>
      </div>
    </my-page-container>
  </q-page>
</template>

<script>
export default {
  components: {
    'my-page-container': () =>
      import('components/MyPageContainer.vue').then(m => m.default),
  },
};
</script>

<style lang="scss" scoped>
.ds-byline {
  padding-bottom: 20px;
  color: gray;
}

.ds-section {
  padding-bottom: 20px;
}
</style>
